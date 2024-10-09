import { ApiProperty } from '@nestjs/swagger';

export class ProductResponseDto {
  @ApiProperty({ description: 'id', example: '1' })
  id: number;
  @ApiProperty({ description: 'name', example: 'product-1' })
  name: string;
  @ApiProperty({ description: 'active', example: 'true' })
  active: boolean;
}
