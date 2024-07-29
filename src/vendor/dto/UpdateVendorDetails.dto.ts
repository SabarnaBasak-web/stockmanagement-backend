import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateVendorDetailsPayload {
  @ApiProperty({ description: 'Name of the vendor', example: 'John Doe' })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({
    description: 'Mobile number of the vendor',
    example: '1234567890',
  })
  @IsOptional()
  @IsString()
  mobile: string;

  @ApiProperty({
    description: 'address of the vendor',
    example: 'Some street address',
  })
  @IsOptional()
  address: string;
}
