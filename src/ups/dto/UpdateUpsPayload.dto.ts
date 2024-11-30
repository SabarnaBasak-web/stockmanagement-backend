import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdateUpsPayload {
  @ApiProperty({ description: 'Gem number', example: 'gem-001' })
  @IsOptional()
  gemNo: number;

  @ApiProperty({ description: 'Gem date', example: '08-09-2004' })
  @IsOptional()
  gemDate: Date;

  @ApiProperty({ description: 'Brand Name', example: 'APC' })
  @IsOptional()
  brandName: string;

  @ApiProperty({
    description: 'Serial number of the ups',
    example: '#serial-0001',
  })
  @IsOptional()
  serialNo: string;

  @ApiProperty({
    description: 'Model number of the ups',
    example: '#model-0001',
  })
  @IsOptional()
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
  @IsOptional()
  defunct: boolean;

  @ApiProperty({
    description: 'Date of delivery',
    example: '21-06-2024',
  })
  @IsOptional()
  deliveryDate: Date;

  @ApiProperty({ description: 'Vendor Id', example: '1' })
  @IsOptional()
  vendorId: number;
}
