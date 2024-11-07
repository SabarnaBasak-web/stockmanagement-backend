import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreatedVendorResponse,
  CreateVendorPayload,
  UpdateVendorDetailsPayload,
} from './dto';
import { httpExceptionHandler } from 'src/helper/errorhelper';
import { VendorResponseDto } from './dto/CreatedVendorResponse.dto';

@Injectable()
export class VendorService {
  constructor(private prismaService: PrismaService) {}

  async addVendor(
    createVendorPayload: CreateVendorPayload,
  ): Promise<CreatedVendorResponse> {
    const createdVendor = await this.prismaService.vendor.create({
      data: {
        ...createVendorPayload,
        dateOfRegistry: new Date(
          Date.parse(createVendorPayload.dateOfRegistry),
        ),
      },
    });

    return createdVendor;
  }

  async fetchAllVendors(
    take?: number,
    cursor?: number,
  ): Promise<VendorResponseDto> {
    let vendors;
    if (!take && !cursor) {
      vendors = await this.prismaService.vendor.findMany();
    }
    vendors = await this.prismaService.vendor.findMany({
      take: take,
      ...(+cursor > 0 && {
        skip: 1,
        cursor: { id: +cursor },
      }),
    });
    const totalRows = await this.prismaService.vendor.count();
    return { data: vendors, total: totalRows };
  }

  async getVendorDetailsByName(
    searchName: string,
    take?: number,
    cursor?: number,
  ): Promise<CreatedVendorResponse[]> {
    return await this.prismaService.vendor.findMany({
      take: take ?? 10,
      ...(cursor &&
        +cursor > 0 && {
          skip: 1,
          cursor: { id: +cursor },
        }),
      where: {
        name: {
          contains: searchName,
        },
      },
      orderBy: {
        name: 'asc',
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

    return await this.prismaService.vendor.update({
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
