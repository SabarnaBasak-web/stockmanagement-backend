import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class AddUpsPayload {
  @ApiProperty({ description: 'Gem number', example: 'gem-001' })
  @IsNumber()
  @IsNotEmpty()
  gemNo: number;

  @ApiProperty({ description: 'Gem date', example: '08-09-2004' })
  @IsDate()
  gemDate: Date;

  @ApiProperty({ description: 'Brand Name', example: 'APC' })
  @IsNotEmpty()
  brandName: string;

  @ApiProperty({
    description: 'Serial number of the ups',
    example: '#serial-0001',
  })
  @IsNotEmpty()
  serialNo: string;

  @ApiProperty({
    description: 'Model number of the ups',
    example: '#model-0001',
  })
  @IsNotEmpty()
  modelNo: string;

  @ApiProperty({
    description: 'Details of the problem',
    example: 'some problem occured',
  })
  @IsOptional()
  problem: string;

  @ApiProperty({
    description: 'warrenty start date',
    example: '12-08-2024',
  })
  @IsOptional()
  warrentyStartDate: Date;

  @ApiProperty({
    description: 'Warrenty end date',
    example: '11-08-2026',
  })
  @IsOptional()
  warrentyEndDate: Date;

  @ApiProperty({
    description: 'Defunct',
    example: 'false',
  })
  @IsNotEmpty()
  defunct: boolean;

  @ApiProperty({
    description: 'is covered under AMC',
    example: 'false',
  })
  @IsNotEmpty()
  isAmc: boolean;

  @ApiProperty({
    description: 'ewaster',
    example: 'false',
  })
  @IsNotEmpty()
  eWaste: boolean;

  @ApiProperty({
    description: 'Date of delivery',
    example: '21-06-2024',
  })
  @IsOptional()
  deliveryDate: Date;

  @ApiProperty({
    description: 'Vendor id',
    example: 'vendor-001',
  })
  @IsNotEmpty()
  vendorId: number;
}
