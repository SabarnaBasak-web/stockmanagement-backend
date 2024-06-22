import { HttpStatus, Injectable } from '@nestjs/common';
import { RoleEnum } from 'src/enums/role.enum';
import { httpExceptionHandler } from 'src/helper/errorhelper';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoutesService {
  constructor(private prisma: PrismaService) {}

  async createRoute(routeName: string, userId: number) {
    const userDetails = await this.prisma.login.findFirst({
      where: {
        id: userId,
      },
      include: {
        role: true,
      },
    });
    if (userDetails.role.role !== RoleEnum.SUPERADMIN) {
      httpExceptionHandler(
        'Not enough permissions to create a route',
        HttpStatus.UNAUTHORIZED,
      );
    }

    return await this.prisma.routes.create({
      data: {
        routes: routeName,
      },
    });
  }
  async getAllRoutes(userId: number) {
    const userDetails = await this.prisma.login.findFirst({
      where: {
        id: userId,
      },
      include: {
        role: true,
      },
    });
    const accessibleRoutes = await this.prisma.roles.findMany({
      where: { id: userDetails.role.id },
      include: { route: true },
    });

    return accessibleRoutes;
  }
}
