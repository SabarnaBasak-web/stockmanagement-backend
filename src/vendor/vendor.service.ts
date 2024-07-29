import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatedVendorResponse, CreateVendorPayload } from './dto';

@Injectable()
export class VendorService {
  constructor(private prismaService: PrismaService) {}

  async addVendor(
    createVendorPayload: CreateVendorPayload,
  ): Promise<CreatedVendorResponse> {
    const createdVendor = await this.prismaService.vendor.create({
      data: {
        ...createVendorPayload,
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
}
