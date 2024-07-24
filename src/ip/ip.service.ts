import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddIpDto, UpdateIpDto } from './dto';
import { httpExceptionHandler } from 'src/helper/errorhelper';

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

  async assignIpToEmployee(ipId: number, body: UpdateIpDto) {
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

  async getAllIps() {
    return await this.prisma.ip.findMany({ include: { Employee: true } });
  }

  async getIpDetailsById(ipId: number) {
    return await this.prisma.ip.findFirst({
      where: { id: ipId },
    });
  }

  async updateIpNumber(ipNumber: string, ipId: number) {
    const ipDetails = await this.prisma.ip.findUnique({ where: { id: ipId } });
    if (!ipDetails) {
      throw new HttpException('invalid IP id', HttpStatus.NOT_FOUND);
    }

    const updatedIp = await this.prisma.ip.update({
      data: {
        ipNumber: ipNumber,
      },
      where: {
        id: ipId,
      },
    });

    return updatedIp;
  }
}
