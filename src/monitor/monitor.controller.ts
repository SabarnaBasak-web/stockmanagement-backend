import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { MonitorService } from './monitor.service';
import { ApiTags, ApiSecurity, ApiCreatedResponse } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard/auth-guard';
import { Roles } from 'src/auth/roles/roles.decorator';
import { RoleEnum } from 'src/enums/role.enum';
import { CreatedMonitorResponse, CreateMonitorRequest } from './dto';
import { PaginationQueryFilter } from 'src/assigned-products/dto';

@UseGuards(JwtGuard)
@ApiTags('Monitor')
@ApiSecurity('JWT-auth')
@Controller('monitor')
export class MonitorController {
  constructor(private monitorService: MonitorService) {}

  @ApiCreatedResponse({
    description: 'New monitor details added',
    type: CreatedMonitorResponse,
  })
  @Roles(RoleEnum.SUPERADMIN)
  @Post()
  addMonitor(
    @Body() createMonitorPayload: CreateMonitorRequest,
  ): Promise<CreatedMonitorResponse> {
    return this.monitorService.addMonitor(createMonitorPayload);
  }

  @ApiCreatedResponse({
    description: 'New monitor details added',
    type: [CreatedMonitorResponse],
  })
  @Roles(RoleEnum.SUPERADMIN)
  @Get()
  getMonitorsList(
    @Param() paginationQuery: PaginationQueryFilter,
  ): Promise<CreatedMonitorResponse[]> {
    return this.monitorService.getMonitorsList(paginationQuery);
  }
}
