import { HttpStatus, Injectable } from '@nestjs/common';
import { AddEmployeeDto, UpdateEmployeeDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { httpExceptionHandler } from 'src/helper/errorhelper';
import { PaginationQueryFilter } from 'src/assigned-products/dto';

@Injectable()
export class EmployeeService {
  constructor(private prismaService: PrismaService) {}

  async createEmployee(createEmployeeDto: AddEmployeeDto) {
    const ifIpExists = await this.prismaService.ip.findFirst({
      where: { id: createEmployeeDto.IpId },
    });

    if (!ifIpExists) {
      httpExceptionHandler('Incorrect Ip', HttpStatus.BAD_REQUEST);
    }
    const createdEmployee = await this.prismaService.employee.create({
      data: {
        ...createEmployeeDto,
      },
      include: {
        Ip: true,
      },
    });

    return createdEmployee;
  }

  async getAllEmployees(paginationQuery: PaginationQueryFilter) {
    const { take, cursor } = paginationQuery;
    const employeeList = await this.prismaService.employee.findMany({
      take: take ? take : 10,
      ...(cursor &&
        +cursor > 0 && {
          skip: 1,
          cursor: { id: +cursor },
        }),
      where: { active: true },
    });
    const totalCount = await this.prismaService.employee.count();
    return { data: employeeList, total: totalCount };
  }

  async getEmployeeDetailsById(userId: number) {
    const employeeData = await this.prismaService.employee.findFirst({
      where: { id: userId },
      include: { Ip: true },
    });

    if (!employeeData) {
      httpExceptionHandler('Incorrect employeeId', HttpStatus.BAD_REQUEST);
    }
    return employeeData;
  }
  async getLoggedInEmployeeDetailsById(userId: number) {
    const employeeData = await this.prismaService.login.findFirst({
      where: { id: userId, active: true },
      include: { employee: true },
    });

    if (!employeeData) {
      httpExceptionHandler('Incorrect employeeId', HttpStatus.BAD_REQUEST);
    }
    delete employeeData.password;
    return employeeData;
  }

  async updateEmployeeDetails(empPayload: UpdateEmployeeDto, empId: number) {
    const employeeExists = await this.prismaService.employee.findFirst({
      where: { id: empId },
    });

    if (!employeeExists) {
      httpExceptionHandler('Employee does not exists', HttpStatus.BAD_REQUEST);
    }

    const response = await this.prismaService.employee.update({
      data: { ...empPayload },
      where: { id: empId },
    });
    return response;
  }
}
