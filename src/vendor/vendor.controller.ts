import {
  Body,
  Controller,
  Get,
  Optional,
  ParseBoolPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { VendorService } from './vendor.service';
import { Roles } from 'src/auth/roles/roles.decorator';
import { RoleEnum } from 'src/enums/role.enum';
import { CreatedVendorResponse, CreateVendorPayload } from './dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiQuery,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard/auth-guard';
import { IsOptional } from 'class-validator';

@UseGuards(JwtGuard)
@ApiTags('Vendors')
@ApiSecurity('JWT-auth')
@Controller('vendor')
export class VendorController {
  constructor(private vendorService: VendorService) {}

  @ApiCreatedResponse({
    description: 'Vendor Created',
    type: CreatedVendorResponse,
  })
  @Roles(RoleEnum.SUPERADMIN)
  @Post()
  createVendor(
    @Body() createVendorPayload: CreateVendorPayload,
  ): Promise<CreatedVendorResponse> {
    return this.vendorService.addVendor(createVendorPayload);
  }

  @ApiOkResponse({
    description: 'Return all vendors',
    type: [CreatedVendorResponse],
  })
  @ApiQuery({ name: 'search', required: false })
  @Roles(RoleEnum.SUPERADMIN)
  @Get()
  getAllVendors(
    @Query('search') search?: string,
  ): Promise<CreatedVendorResponse[]> {
    return search
      ? this.vendorService.getVendorDetailsByName(search)
      : this.vendorService.fetchAllVendors();
  }
}
