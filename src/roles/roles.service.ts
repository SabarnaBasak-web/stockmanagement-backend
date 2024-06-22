import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRoleDto } from './dto';
import { httpExceptionHandler } from 'src/helper/errorhelper';

@Injectable()
export class RolesService {
  constructor(private prisma: PrismaService) {}

  async createRole(payload: CreateRoleDto) {
    const roleExists = await this.prisma.roles.findFirst({
      where: {
        role: payload.name,
      },
    });
    const routeExists = await this.prisma.routes.findFirst({
      where: {
        routes: payload.routes,
      },
    });

    if (roleExists && routeExists) {
      httpExceptionHandler('Data already exists', HttpStatus.BAD_REQUEST);
    }

    if (roleExists && !routeExists) {
      return await this.prisma.roles.update({
        where: {
          id: roleExists.id,
        },
        data: {
          route: {
            create: {
              routes: payload.routes,
            },
          },
        },
      });
    }
    if (!roleExists && routeExists) {
      return await this.prisma.routes.update({
        where: {
          id: routeExists.id,
        },
        data: {
          Roles: {
            create: {
              role: payload.name,
            },
          },
        },
      });
    }
    if (!roleExists && !routeExists) {
      return await this.prisma.roles.create({
        data: {
          role: payload.name,
          route: {
            create: {
              routes: payload.routes,
            },
          },
        },
      });
    }
  }

  async getAllRoles() {
    const result = await this.prisma.roles.findMany({
      include: {
        route: true,
      },
    });
    return result;
  }
}
