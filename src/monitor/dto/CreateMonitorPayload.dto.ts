import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateMonitorRequest {
  @ApiProperty({ description: 'gem number', example: 'gem-001' })
  @IsNumber()
  @IsNotEmpty()
  gemNo: number;

  @ApiProperty({ description: 'gem date', example: '11/12/1993' })
  @IsNotEmpty()
  gemDate: Date;

  @ApiProperty({ description: 'brand name', example: 'samsung' })
  @IsNotEmpty()
  brandName: string;

  @ApiProperty({ description: 'serial number', example: 'serial-0001' })
  @IsNotEmpty()
  serialNo: string;

  @ApiProperty({ description: 'model number', example: 'model-0001' })
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
    example: '12345',
  })
  @IsNotEmpty()
  vendorId: number;

  @ApiProperty({ description: 'display size', example: '32inch' })
  @IsNotEmpty()
  displaySize: string;
}
