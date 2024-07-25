import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AssignProductDto {
  @ApiProperty({ description: 'ipId', example: 'ip-001' })
  @IsNotEmpty()
  ipId: number;

  @ApiProperty({ description: 'employee id', example: 'emp-001' })
  @IsNotEmpty()
  empId: string;

  @ApiProperty({ description: 'product-id', example: 'product-001' })
  @IsNotEmpty()
  productId: number;

  @ApiProperty({
    description: 'product serial number',
    example: 'serial-#001',
  })
  @IsNotEmpty()
  serialNo: string;
}
