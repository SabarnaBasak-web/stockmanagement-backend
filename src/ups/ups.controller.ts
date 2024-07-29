import { Body, Controller, UseGuards, Post } from '@nestjs/common';
import { ApiTags, ApiSecurity, ApiCreatedResponse } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard/auth-guard';
import { UpsService } from './ups.service';
import { Roles } from 'src/auth/roles/roles.decorator';
import { RoleEnum } from 'src/enums/role.enum';
import { AddUpsPayload, UpsCreatedResponse } from './dto';

@UseGuards(JwtGuard)
@ApiTags('Ups')
@ApiSecurity('JWT-auth')
@Controller('ups')
export class UpsController {
  constructor(private upsService: UpsService) {}

  @ApiCreatedResponse({
    description: 'New ups added',
    type: UpsCreatedResponse,
  })
  @Roles(RoleEnum.SUPERADMIN)
  @Post()
  addUps(@Body() addUpsEntry: AddUpsPayload) {
    return this.upsService.insertUpsDetails(addUpsEntry);
  }
}
