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

    return await this.prismaService.assignedProducts.create({
      data: {
        ...assignProductPayload,
        dateOfIssue: new Date(Date.now()),
      },
    });
  }

  async getAllAssignedProducts(count: number, cursor?: number) {
    const assignedProductList =
      await this.prismaService.assignedProducts.findMany({
        take: count ? +count : 10,
        ...(cursor &&
          +cursor > 0 && {
            skip: 1,
            cursor: { id: +cursor },
          }),
        include: { employee: true },
        orderBy: {
          dateOfIssue: 'desc',
        },
      });

    return assignedProductList;
  }

  async getAssignedProductsBySerialNumber(serialNumber: string) {
    const assignedProductsList =
      await this.prismaService.assignedProducts.findUnique({
        where: { serialNo: serialNumber },
        include: { employee: true },
      });

    return assignedProductsList;
  }
}
