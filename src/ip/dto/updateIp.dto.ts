import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateIpDto {
  @ApiProperty({ description: 'employeeId', example: 'emp-001' })
  @IsNotEmpty()
  employeeId: number;
}
