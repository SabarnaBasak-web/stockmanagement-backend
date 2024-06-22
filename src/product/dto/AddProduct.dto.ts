import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AddProductDto {
  @ApiProperty({ description: 'name', example: 'product-1' })
  @IsNotEmpty()
  name: string;
  @ApiProperty({ description: 'active', example: 'true' })
  @IsNotEmpty()
  active: boolean;
}
