import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { VendorService } from './vendor.service';
import { Roles } from 'src/auth/roles/roles.decorator';
import { RoleEnum } from 'src/enums/role.enum';
import {
  CreatedVendorResponse,
  CreateVendorPayload,
  UpdateVendorDetailsPayload,
} from './dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard/auth-guard';

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
  @ApiBadRequestResponse({
    description: 'Name/mobile/address/DateOfRegistry must not be empty,',
  })
  @Roles(RoleEnum.SUPERADMIN)
  @Post()
  createVendor(
    @Body() createVendorPayload: CreateVendorPayload,
  ): Promise<CreatedVendorResponse> {
    return this.vendorService.addVendor(createVendorPayload);
  }

  // Todo: Need to add pagination
  @ApiOkResponse({
    description: 'Return all vendors',
    type: [CreatedVendorResponse],
  })
  @ApiQuery({ name: 'search', required: false })
  @Roles(RoleEnum.SUPERADMIN)
  @Get()
  getAllVendors(
    @Query('search') search?: string,
    @Query('take') take?: string,
    @Query('cursor') cursor?: string,
  ): Promise<CreatedVendorResponse[]> {
    return search
      ? this.vendorService.getVendorDetailsByName(search, take, cursor)
      : this.vendorService.fetchAllVendors(take, cursor);
  }

  @ApiOkResponse({ description: 'Updated succesfully' })
  @Put(':id')
  updateVendorDetails(
    @Body() updateDetails: UpdateVendorDetailsPayload,
    @Param('id', ParseIntPipe) vendorId: number,
  ): Promise<void> {
    return this.vendorService.updateDetails(updateDetails, vendorId);
  }

  @ApiOkResponse({
    description: 'Get vendor details by id',
    type: CreatedVendorResponse,
  })
  @ApiNotFoundResponse({
    description: 'Vendor Id does not exists',
  })
  @Get(':id')
  getVendorDetailsById(
    @Param('id', ParseIntPipe) vendorId: number,
  ): Promise<CreatedVendorResponse> {
    return this.vendorService.fetchVendorDetailsById(vendorId);
  }
}
