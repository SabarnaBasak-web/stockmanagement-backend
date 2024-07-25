import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { JwtGuard } from 'src/auth/guard/auth-guard';
import { GetUser } from 'src/auth/decorator';
import { Roles } from 'src/auth/roles/roles.decorator';
import { RoleGuard } from 'src/auth/role/role.guard';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { CreateRouteDto, GetRoutesByRoleResponseDto } from './dto';
import { RoleEnum } from 'src/enums/role.enum';

@UseGuards(JwtGuard, RoleGuard)
@ApiTags('routes')
@ApiSecurity('JWT-auth')
@ApiBearerAuth('Authorization')
@Controller('routes')
export class RoutesController {
  constructor(private routesService: RoutesService) {}

  @Roles(RoleEnum.SUPERADMIN)
  @Post()
  @ApiCreatedResponse({ description: 'Route created', type: CreateRouteDto })
  createRoute(@GetUser('id') userId: number, @Body() request: CreateRouteDto) {
    return this.routesService.createRoute(request.name, userId);
  }

  @Get()
  @ApiOkResponse({
    description: 'Get Route based on role',
    type: GetRoutesByRoleResponseDto,
  })
  getRoute(@GetUser('id') userId: number) {
    return this.routesService.getAllRoutes(userId);
  }
}
