import { ApiProperty } from '@nestjs/swagger';

export class CreatedVendorResponse {
  @ApiProperty({ description: 'unique id of the vendor', example: '1' })
  id: number;

  @ApiProperty({ description: 'Name of the vendor', example: 'John Doe' })
  name: string;

  @ApiProperty({
    description: 'Mobile number of the vendor',
    example: '1234567890',
  })
  mobile: string;

  @ApiProperty({
    description: 'address of the vendor',
    example: 'Some street address',
  })
  address: string;

  @ApiProperty({
    description: 'Date of registry',
    example: '03/05/1998',
  })
  dateOfRegistry: Date;
}

export class VendorResponseDto {
  @ApiProperty({
    description: 'List of all Vendors',
    type: [CreatedVendorResponse],
  })
  data: CreatedVendorResponse[];
  @ApiProperty({ description: 'total number of rows', example: '10' })
  total: number;
}
