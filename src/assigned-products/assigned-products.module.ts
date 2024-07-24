import { Module } from '@nestjs/common';
import { AssignedProductsController } from './assigned-products.controller';
import { AssignedProductsService } from './assigned-products.service';

@Module({
  controllers: [AssignedProductsController],
  providers: [AssignedProductsService]
})
export class AssignedProductsModule {}
