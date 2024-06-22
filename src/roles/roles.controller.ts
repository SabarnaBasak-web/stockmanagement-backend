import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto';
import { JwtGuard } from 'src/auth/guard/auth-guard';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';

@UseGuards(JwtGuard)
@Controller('roles')
@ApiTags('Roles')
@ApiSecurity('JWT-auth')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Post()
  createRole(@Body() createRole: CreateRoleDto) {
    return this.rolesService.createRole(createRole);
  }

  @Get()
  getAllRoles() {
    return this.rolesService.getAllRoles();
  }
}
