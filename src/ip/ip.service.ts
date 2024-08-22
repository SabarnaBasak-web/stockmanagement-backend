import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddIpDto, AssignIpToEmployeeDto, UpdateIpDto } from './dto';
import { httpExceptionHandler } from 'src/helper/errorhelper';
import { PaginationQueryFilter } from 'src/assigned-products/dto';

@Injectable()
export class IpService {
  constructor(private prisma: PrismaService) {}

  async addIp(dto: AddIpDto) {
    const ipAdded = await this.prisma.ip.create({
      data: {
        ...dto,
      },
    });

    return ipAdded;
  }

  async assignIpToEmployee(ipId: number, body: AssignIpToEmployeeDto) {
    const { employeeId } = body;
    const employee = await this.prisma.employee.findUnique({
      where: {
        id: employeeId,
      },
    });
    if (!employee) {
      httpExceptionHandler('invalid employee id', HttpStatus.NOT_FOUND);
    }

    const foundIp = await this.prisma.ip.findUnique({
      where: {
        id: ipId,
      },
    });
    if (foundIp.inUse) {
      httpExceptionHandler('Ip already in use', HttpStatus.BAD_REQUEST);
    }
    const updateEmployeeIp = await this.prisma.employee.update({
      data: {
        ipId: ipId,
      },
      where: {
        id: employeeId,
      },
    });

    await this.prisma.ip.update({
      data: {
        inUse: true,
      },
      where: {
        id: ipId,
      },
    });
    return updateEmployeeIp;
  }

  async getAllIps(query: PaginationQueryFilter) {
    const { take, cursor } = query;
    const allIps = await this.prisma.ip.findMany({
      take: take ? take : 10,
      ...(cursor &&
        +cursor > 0 && {
          skip: 1,
          cursor: { id: +cursor },
        }),
    });
    const totalRows = await this.prisma.ip.count();
    return { data: allIps, total: totalRows };
  }

  async getIpDetailsById(ipId: number) {
    return await this.prisma.ip.findFirst({
      where: { id: ipId },
    });
  }

  async updateIpDetails(updateIpPayload: UpdateIpDto, ipId: number) {
    const ipDetails = await this.prisma.ip.findUnique({ where: { id: ipId } });
    if (!ipDetails) {
      throw new HttpException('invalid IP id', HttpStatus.NOT_FOUND);
    }

    const updatedIp = await this.prisma.ip.update({
      data: {
        ...updateIpPayload,
      },
      where: {
        id: ipId,
      },
    });

    return updatedIp;
  }
}
