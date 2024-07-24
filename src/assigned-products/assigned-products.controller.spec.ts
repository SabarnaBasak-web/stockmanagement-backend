import { Test, TestingModule } from '@nestjs/testing';
import { AssignedProductsController } from './assigned-products.controller';

describe('AssignedProductsController', () => {
  let controller: AssignedProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssignedProductsController],
    }).compile();

    controller = module.get<AssignedProductsController>(AssignedProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
