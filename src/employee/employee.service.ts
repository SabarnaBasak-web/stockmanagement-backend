import { HttpStatus, Injectable } from '@nestjs/common';
import { AddEmployeeDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { httpExceptionHandler } from 'src/helper/errorhelper';

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

  async getAllEmployees() {
    return await this.prismaService.employee.findMany({
      include: { Ip: true },
    });
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
}
