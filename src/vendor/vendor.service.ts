import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreatedVendorResponse,
  CreateVendorPayload,
  UpdateVendorDetailsPayload,
} from './dto';
import { httpExceptionHandler } from 'src/helper/errorhelper';

@Injectable()
export class VendorService {
  constructor(private prismaService: PrismaService) {}

  async addVendor(
    createVendorPayload: CreateVendorPayload,
  ): Promise<CreatedVendorResponse> {
    const createdVendor = await this.prismaService.vendor.create({
      data: {
        ...createVendorPayload,
        dateOfRegistry: createVendorPayload.dateOfRegistry,
      },
    });

    return createdVendor;
  }

  async fetchAllVendors(): Promise<CreatedVendorResponse[]> {
    return await this.prismaService.vendor.findMany();
  }

  async getVendorDetailsByName(
    searchName: string,
  ): Promise<CreatedVendorResponse[]> {
    return await this.prismaService.vendor.findMany({
      where: {
        name: searchName,
      },
    });
  }

  async updateDetails(
    updateDetails: UpdateVendorDetailsPayload,
    vendorId: number,
  ) {
    const vendorDetails = await this.prismaService.vendor.findUnique({
      where: { id: vendorId },
    });

    if (!vendorDetails) {
      httpExceptionHandler('Invalid vendor details', HttpStatus.BAD_REQUEST);
    }

    await this.prismaService.vendor.update({
      where: {
        id: vendorId,
      },
      data: {
        ...updateDetails,
      },
    });
  }

  async fetchVendorDetailsById(vendorId: number) {
    const vendorDetails = await this.prismaService.vendor.findUnique({
      where: { id: vendorId },
    });

    if (!vendorDetails)
      httpExceptionHandler('vendor id does not exists', HttpStatus.NOT_FOUND);
    return vendorDetails;
  }
}
