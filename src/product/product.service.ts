import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddProductDto, ProductResponseDto } from './dto';
import { httpExceptionHandler } from 'src/helper/errorhelper';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async addProductDetails(dto: AddProductDto) {
    const foundProduct = await this.prisma.products.findFirst({
      where: {
        name: dto.name,
      },
    });

    if (foundProduct) {
      throw new HttpException('product already exists', HttpStatus.BAD_REQUEST);
    }
    const newProduct = await this.prisma.products.create({
      data: {
        ...dto,
      },
    });

    if (!newProduct) {
      httpExceptionHandler(
        'Something went wrong while creating new product',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return newProduct;
  }

  async getAllProducts(): Promise<ProductResponseDto[]> {
    return await this.prisma.products.findMany({ where: { active: true } });
  }
}
