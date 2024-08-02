import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddUpsPayload, UpdateUpsPayload, UpsCreatedResponse } from './dto';
import { httpExceptionHandler } from 'src/helper/errorhelper';
import { PaginationQueryFilter } from 'src/assigned-products/dto';

@Injectable()
export class UpsService {
  constructor(private prismaService: PrismaService) {}

  async insertUpsDetails(
    upsDetails: AddUpsPayload,
  ): Promise<UpsCreatedResponse> {
    const { vendorId } = upsDetails;
    const productDetails = await this.prismaService.products.findFirst({
      where: { name: 'Ups' },
    });
    const vendorDetails = await this.prismaService.vendor.findUnique({
      where: {
        id: vendorId,
      },
    });
    if (!vendorDetails) {
      httpExceptionHandler('Incorrect vendor Id', HttpStatus.BAD_REQUEST);
    }
    return await this.prismaService.ups.create({
      data: {
        ...upsDetails,
        productId: productDetails.id,
        eWaste: false,
        isAmc: true,
      },
    });
  }

  async fetchAllUpsList(
    paginationQuery: PaginationQueryFilter,
  ): Promise<UpsCreatedResponse[]> {
    const { count, cursor } = paginationQuery;

    return await this.prismaService.ups.findMany({
      take: count ? count : 10,
      ...(cursor &&
        +cursor > 0 && {
          skip: 1,
          cursor: { id: +cursor },
        }),
      orderBy: {
        brandName: 'asc',
      },
    });
  }

  async updateUpsDetails(
    updatePayload: UpdateUpsPayload,
    upsId: number,
  ): Promise<UpsCreatedResponse> {
    const upsDetails = await this.prismaService.ups.findUnique({
      where: {
        id: upsId,
      },
    });

    if (!upsDetails)
      httpExceptionHandler('Invalid ups id', HttpStatus.BAD_REQUEST);

    return await this.prismaService.ups.update({
      where: {
        id: upsId,
      },
      data: {
        ...updatePayload,
      },
    });
  }
}
