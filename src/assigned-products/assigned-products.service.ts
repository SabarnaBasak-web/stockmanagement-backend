import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AssignedProductsService {
  constructor(private prismaService: PrismaService) {}
}
