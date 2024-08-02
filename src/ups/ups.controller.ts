import {
  Body,
  Controller,
  UseGuards,
  Post,
  Query,
  Get,
  Put,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import {
  ApiTags,
  ApiSecurity,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard/auth-guard';
import { UpsService } from './ups.service';
import { Roles } from 'src/auth/roles/roles.decorator';
import { RoleEnum } from 'src/enums/role.enum';
import { AddUpsPayload, UpdateUpsPayload, UpsCreatedResponse } from './dto';
import { PaginationQueryFilter } from 'src/assigned-products/dto';

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
  addUps(@Body() addUpsEntry: AddUpsPayload): Promise<UpsCreatedResponse> {
    return this.upsService.insertUpsDetails(addUpsEntry);
  }

  @ApiOkResponse({
    description: 'List of all ups',
    type: [UpsCreatedResponse],
  })
  @Roles(RoleEnum.SUPERADMIN)
  @Get()
  getAllUpsList(
    @Query() paginationQuery: PaginationQueryFilter,
  ): Promise<UpsCreatedResponse[]> {
    return this.upsService.fetchAllUpsList(paginationQuery);
  }

  @ApiOkResponse({
    description: 'Successfully updated ups details',
    type: UpsCreatedResponse,
  })
  @ApiBadRequestResponse({
    description: 'Invalid ups id',
  })
  @Put(':id')
  @Roles(RoleEnum.SUPERADMIN)
  updateUpsDetails(
    @Body() upsDetails: UpdateUpsPayload,
    @Param('id', ParseIntPipe) upsId: number,
  ): Promise<UpsCreatedResponse> {
    return this.upsService.updateUpsDetails(upsDetails, upsId);
  }
}
