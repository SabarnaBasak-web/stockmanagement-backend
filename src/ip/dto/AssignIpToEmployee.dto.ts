import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AssignIpToEmployeeDto {
  @ApiProperty({ description: 'employeeId', example: 'emp-001' })
  @IsNotEmpty()
  employeeId: number;
}
