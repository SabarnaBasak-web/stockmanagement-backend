import { AddProductDto } from './dto';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard/auth-guard';
import { ProductService } from './product.service';
import { RoleGuard } from 'src/auth/role/role.guard';
import { Roles } from 'src/auth/roles/roles.decorator';
import { ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';

@ApiTags('Product')
@UseGuards(JwtGuard, RoleGuard)
@Controller('product')
@ApiSecurity('JWT-auth')
export class ProductController {
  constructor(private productService: ProductService) {}

  @ApiResponse({
    status: 201,
    description: 'Add product',
    type: 'Product',
  })
  @Roles('superAdmin')
  @Post()
  addProduct(@Body() dto: AddProductDto) {
    return this.productService.addProductDetails(dto);
  }

  @ApiResponse({
    status: 200,
    description: 'Fetch All Products',
    type: 'Product',
  })
  @Roles('superAdmin')
  @Get()
  fetchAllProducts() {
    return this.productService.getAllProducts();
  }
}
