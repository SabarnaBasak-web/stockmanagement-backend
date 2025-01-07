import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class AssignedProductQueryDto {
  @ApiProperty({
    description: 'employee id of the employee',
    example: '5',
  })
  @Type(() => Number)
  @IsNumber()
  empId: number;
}
