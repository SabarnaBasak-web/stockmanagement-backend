import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddUpsPayload } from './dto';
import { httpExceptionHandler } from 'src/helper/errorhelper';

@Injectable()
export class UpsService {
  constructor(private prismaService: PrismaService) {}

  async insertUpsDetails(upsDetails: AddUpsPayload) {
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
}
