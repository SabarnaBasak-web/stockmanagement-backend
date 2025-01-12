import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatedMonitorResponse, CreateMonitorRequest } from './dto';
import { httpExceptionHandler } from 'src/helper/errorhelper';
import { PaginationQueryFilter } from 'src/assigned-products/dto';
import { MonitorResponseDto } from './dto/CreatedMonitorResponse.dto';

@Injectable()
export class MonitorService {
  constructor(private prismaService: PrismaService) {}

  async addMonitor(
    payload: CreateMonitorRequest,
  ): Promise<CreatedMonitorResponse> {
    const { vendorId } = payload;
    const productDetails = await this.prismaService.products.findFirst({
      where: { name: 'Monitor' },
    });
    const vendorDetails = await this.prismaService.vendor.findUnique({
      where: {
        id: vendorId,
      },
    });
    if (!vendorDetails) {
      httpExceptionHandler('Incorrect vendor Id', HttpStatus.BAD_REQUEST);
    }
    // TODO check if the serial number exists
    return await this.prismaService.monitor.create({
      data: {
        ...payload,
        productId: productDetails.id,
      },
    });
  }

  async getMonitorsList(
    paginationQuery: PaginationQueryFilter,
  ): Promise<MonitorResponseDto> {
    const { take, cursor } = paginationQuery;
    const monitorList = await this.prismaService.monitor.findMany({
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
    const totalRows = await this.prismaService.monitor.count();
    return { data: monitorList, total: totalRows };
  }
}
