import { Controller, UseGuards } from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard/auth-guard';
import { AssignedProductsService } from './assigned-products.service';

@UseGuards(JwtGuard)
@Controller('assigned-products')
@ApiTags('Ip')
@ApiSecurity('JWT-auth')
export class AssignedProductsController {
  constructor(private assignedProductService: AssignedProductsService) {}

  
}
