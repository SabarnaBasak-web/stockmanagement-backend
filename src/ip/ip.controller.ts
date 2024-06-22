import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { IpService } from './ip.service';
import { AddIpDto, IpAssignedResponseDto, UpdateIpDto } from './dto';
import { JwtGuard } from 'src/auth/guard/auth-guard';
import { Roles } from 'src/auth/roles/roles.decorator';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { IpResponseDto } from './dto/';

@UseGuards(JwtGuard)
@Controller('ip')
@ApiTags('Ip')
@ApiSecurity('JWT-auth')
export class IpController {
  constructor(private ipService: IpService) {}
  @Roles('superAdmin')
  @Post()
  @ApiCreatedResponse({
    description: 'Ip Created',
    type: IpResponseDto,
  })
  addIp(@Body() dto: AddIpDto) {
    return this.ipService.addIp(dto);
  }

  @Roles('superAdmin')
  @Put('assignIp/:id')
  @ApiOkResponse({
    description: 'Assign the Ip to the employee',
    type: IpAssignedResponseDto,
  })
  @ApiNotFoundResponse({
    description: 'Invalid Employee Id',
  })
  assignIpToEmployee(
    @Body() body: UpdateIpDto,
    @Param('id', ParseIntPipe) ipId: number,
  ) {
    return this.ipService.assignIpToEmployee(ipId, body);
  }

  @Roles('superAdmin')
  @Get()
  getAllIps() {
    return this.ipService.getAllIps();
  }

  @Roles('superAdmin')
  @Get(':id')
  getIpDetailsById(@Param('id', ParseIntPipe) id: number) {
    return this.ipService.getIpDetailsById(id);
  }

  @Roles('superAdmin')
  @Put(':id')
  updateIdNumber(
    @Body('ipNumber') ipNumber: string,
    @Param('id', ParseIntPipe) ipId: number,
  ) {
    return this.ipService.updateIpNumber(ipNumber, ipId);
  }
}
