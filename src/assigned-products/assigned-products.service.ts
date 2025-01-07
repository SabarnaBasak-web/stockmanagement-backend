import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AssignProductDto } from './dto/AssignProduct.dto';
import { httpExceptionHandler } from 'src/helper/errorhelper';
import { AssignedProductResponseDto } from './dto';

@Injectable()
export class AssignedProductsService {
  constructor(private prismaService: PrismaService) {}

  async assignProduct(
    assignProductPayload: AssignProductDto,
  ): Promise<AssignedProductResponseDto> {
    const { ipId, empId, serialNo, productId } = assignProductPayload;

    const isIpExists = await this.prismaService.ip.findFirst({
      where: { id: ipId },
    });
    const isEmpExists = await this.prismaService.employee.findFirst({
      where: { empId: empId },
    });
    const isProductExists = await this.prismaService.products.findFirst({
      where: { id: productId },
    });

    if (!isIpExists || !isEmpExists || !isProductExists) {
      httpExceptionHandler('Invalid id', HttpStatus.BAD_REQUEST);
    }

    const { name } = isProductExists;
    const isValidSerialNumber = this.prismaService[name].findUnique({
      where: { serialNumber: serialNo },
    });
    if (!isValidSerialNumber) {
      httpExceptionHandler('Invalid serial number', HttpStatus.BAD_REQUEST);
    }

    // Update the delivery date of the product
    await this.prismaService[name].update({
      where: { serialNo: serialNo },
      data: { deliveryDate: new Date(Date.now()) },
    });
    // update ip in use
    await this.prismaService.ip.update({
      where: { id: ipId },
      data: { inUse: true },
    });
    // update assigned product table
    return await this.prismaService.assignedProducts.create({
      data: {
        ...assignProductPayload,
        dateOfIssue: new Date(Date.now()),
      },
    });
  }

  async getAllAssignedProducts(take?: number, cursor?: number) {
    if (!take && !cursor) {
      return await this.prismaService.assignedProducts.findMany({
        include: { employee: true, ip: true, product: true },
        orderBy: {
          dateOfIssue: 'desc',
        },
      });
    }
    const assignedProductList =
      await this.prismaService.assignedProducts.findMany({
        take: take,
        ...(cursor &&
          +cursor > 0 && {
            skip: 1,
            cursor: { id: +cursor },
          }),
        include: { employee: true, ip: true, product: true },
        orderBy: {
          dateOfIssue: 'desc',
        },
      });

    return assignedProductList;
  }

  async getAssignedProductsByEmployeeId(empId: string) {
    const assignedProductsList =
      await this.prismaService.assignedProducts.findMany({
        where: { empId: empId },
        include: { employee: true },
      });

    return assignedProductsList;
  }

  async getAssignedProductsBySerialNumber(serialNumber: string) {
    const assignedProductsList =
      await this.prismaService.assignedProducts.findUnique({
        where: { serialNo: serialNumber },
        include: { employee: true, product: true, ip: true },
      });

    return assignedProductsList;
  }
}
