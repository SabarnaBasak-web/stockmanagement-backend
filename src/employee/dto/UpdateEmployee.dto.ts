import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdateEmployeeDto {
  @ApiProperty({ description: 'Name of employee', example: 'John Doe' })
  @IsOptional()
  name: string;
  @ApiProperty({
    description: 'Designation of employee',
    example: 'Consultant',
  })
  @IsOptional()
  designation: string;
  @ApiProperty({
    description: 'cell number of employee',
    example: 'cell-001',
  })
  @IsOptional()
  cell: string;
  @ApiProperty({
    description: 'Floor number',
    example: '7',
  })
  @IsOptional()
  floorNumber: string;
  @ApiProperty({
    description: 'Phone number of employee',
    example: '1234567890',
  })
  @IsOptional()
  mobileNumber: string;
}
