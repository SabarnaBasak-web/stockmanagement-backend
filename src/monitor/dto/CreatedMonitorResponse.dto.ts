import { ApiProperty } from '@nestjs/swagger';

export class CreatedMonitorResponse {
  @ApiProperty({ description: 'gem number', example: 'gem-001' })
  gemNo: number;

  @ApiProperty({ description: 'gem date', example: '11/12/1993' })
  gemDate: Date;

  @ApiProperty({ description: 'brand name', example: 'samsung' })
  brandName: string;

  @ApiProperty({ description: 'serial number', example: 'serial-0001' })
  serialNo: string;

  @ApiProperty({ description: 'model number', example: 'model-0001' })
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

  @ApiProperty({ description: 'display size', example: '32inch' })
  displaySize: string;
}
