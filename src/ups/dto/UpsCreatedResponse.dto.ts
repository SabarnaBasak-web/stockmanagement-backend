import { ApiProperty } from '@nestjs/swagger';
import { CreatedVendorResponse } from 'src/vendor/dto';

export class UpsCreatedResponse {
  @ApiProperty({ description: 'unique id of the ups', example: '1' })
  id: number;

  @ApiProperty({ description: 'Gem number', example: 'gem-001' })
  gemNo: number;

  @ApiProperty({ description: 'Gem date', example: '08-09-2004' })
  gemDate: Date;

  @ApiProperty({ description: 'Brand Name', example: 'APC' })
  brandName: string;

  @ApiProperty({
    description: 'Serial number of the ups',
    example: '#serial-0001',
  })
  serialNo: string;

  @ApiProperty({
    description: 'Model number of the ups',
    example: '#model-0001',
  })
  modelNo: string;

  @ApiProperty({
    description: 'Details of the problem',
    example: 'some problem occured',
  })
  problem: string;

  @ApiProperty({
    description: 'warrenty start date',
    example: '12-08-2024',
  })
  warrentyStartDate: Date;

  @ApiProperty({
    description: 'Warrenty end date',
    example: '11-08-2026',
  })
  warrentyEndDate: Date;

  @ApiProperty({
    description: 'Defunct',
    example: 'false',
  })
  defunct: boolean;

  @ApiProperty({
    description: 'is covered under AMC',
    example: 'false',
  })
  isAmc: boolean;

  @ApiProperty({
    description: 'ewaster',
    example: 'false',
  })
  eWaste: boolean;

  @ApiProperty({
    description: 'Date of delivery',
    example: '21-06-2024',
  })
  deliveryDate: Date;

  @ApiProperty({
    description: 'Vendor id',
    example: 'vendor-001',
  })
  vendorId: number;
}

export class UpsResponse extends UpsCreatedResponse {
  @ApiProperty({
    description: 'Vendor Details',
    example: CreatedVendorResponse,
  })
  vendor: CreatedVendorResponse;
}

export class UpsResponseDto {
  @ApiProperty({
    description: 'List of all Vendors',
    type: [UpsResponse],
  })
  data: UpsResponse[];
  @ApiProperty({ description: 'total number of rows', example: '10' })
  total: number;
}
