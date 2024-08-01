import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateVendorPayload {
  @ApiProperty({ description: 'Name of the vendor', example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Mobile number of the vendor',
    example: '1234567890',
  })
  @IsNotEmpty()
  mobile: string;

  @ApiProperty({
    description: 'address of the vendor',
    example: 'Some street address',
  })
  @IsNotEmpty()
  address: string;

  @ApiProperty({
    description: 'Date of registry',
    example: '03/05/1998',
  })
  @IsNotEmpty()
  dateOfRegistry: string;
}
