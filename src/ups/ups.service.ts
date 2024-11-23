import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddUpsPayload, UpdateUpsPayload, UpsCreatedResponse } from './dto';
import { httpExceptionHandler } from 'src/helper/errorhelper';
import { PaginationQueryFilter } from 'src/assigned-products/dto';
import { UpsResponse, UpsResponseDto } from './dto/UpsCreatedResponse.dto';

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
  ): Promise<UpsResponseDto> {
    const { take, cursor } = paginationQuery;

    const upsList = await this.prismaService.ups.findMany({
      take: take ? take : 10,
      ...(cursor &&
        +cursor > 0 && {
          skip: 1,
          cursor: { id: +cursor },
        }),
      orderBy: {
        brandName: 'asc',
      },
      include: {
        vendor: true,
      },
    });

    const totalRows = await this.prismaService.ups.count();
    return { data: upsList, total: totalRows };
  }

  async updateUpsDetails(
    updatePayload: UpdateUpsPayload,
    upsId: number,
  ): Promise<UpsResponse> {
    const upsDetails = await this.prismaService.ups.findUnique({
      where: {
        id: upsId,
      },
    });

    if (!upsDetails)
      httpExceptionHandler('Invalid ups id', HttpStatus.BAD_REQUEST);

    await this.prismaService.ups.update({
      where: {
        id: upsId,
      },
      data: {
        ...updatePayload,
      },
    });

    return await this.prismaService.ups.findFirst({
      where: {
        id: upsId,
      },
      include: {
        vendor: true,
      },
    });
  }
}
