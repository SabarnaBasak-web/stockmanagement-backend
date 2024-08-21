import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  ValidationPipe,
  UsePipes,
  Query,
  Param,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard/auth-guard';
import { AssignedProductsService } from './assigned-products.service';
import { Roles } from 'src/auth/roles/roles.decorator';
import { RoleEnum } from 'src/enums/role.enum';

import {
  AssignProductDto,
  AssignedProductResponseDto,
  AssignedProductWithEmployeeDetailsResponseDto,
  PaginationQueryFilter,
} from './dto';

@UseGuards(JwtGuard)
@Controller('assigned-products')
@ApiTags('Assign Product')
@ApiSecurity('JWT-auth')
export class AssignedProductsController {
  constructor(private assignedProductService: AssignedProductsService) {}

  @ApiCreatedResponse({
    status: 201,
    description: 'Assign Product to employee',
    type: AssignedProductResponseDto,
  })
  @ApiBadRequestResponse({
    description: 'Invalid id',
  })
  @Roles(RoleEnum.SUPERADMIN)
  @Post()
  assignProduct(@Body() assignProductDto: AssignProductDto) {
    return this.assignedProductService.assignProduct(assignProductDto);
  }

  @ApiOkResponse({
    description: 'Get the list of all assigned products',
    type: [AssignedProductWithEmployeeDetailsResponseDto],
  })
  @ApiBadRequestResponse({
    description:
      'Cursor/Count must be a number confirming to specific constaint',
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  @Roles(RoleEnum.SUPERADMIN)
  @Get()
  getAllAssignedProducts(@Query() queryFilter: PaginationQueryFilter) {
    const { take, cursor } = queryFilter;
    return this.assignedProductService.getAllAssignedProducts(take, cursor);
  }

  @ApiOkResponse({
    description: 'Get all the assigned products based on the serial number',
    type: [AssignedProductWithEmployeeDetailsResponseDto],
  })
  @Roles(RoleEnum.SUPERADMIN)
  @Get('/:serialNumber')
  searchAssignedProduct(@Param('serialNumber') serialNumber: string) {
    return this.assignedProductService.getAssignedProductsBySerialNumber(
      serialNumber,
    );
  }
}
