import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class AddEmployeeDto {
  @ApiProperty({ description: 'Name of employee', example: 'John Doe' })
  @IsNotEmpty()
  name: string;
  @ApiProperty({
    description: 'Designation of employee',
    example: 'Consultant',
  })
  @IsNotEmpty()
  designation: string;
  @ApiProperty({
    description: 'cell number of employee',
    example: 'cell-001',
  })
  @IsNotEmpty()
  cell: string;
  @ApiProperty({
    description: 'Floor number',
    example: '7',
  })
  @IsNotEmpty()
  floorNumber: string;
  @ApiProperty({
    description: 'Phone number of employee',
    example: '1234567890',
  })
  @IsNotEmpty()
  mobileNumber: string;
  @ApiProperty({
    description: 'Employee Id of employee',
    example: 'emp-001',
  })
  @IsNotEmpty()
  empId: string;
  @ApiProperty({
    description: 'Active user',
    example: 'true',
  })
  @IsNotEmpty()
  active: boolean;
  @ApiProperty({
    description: 'Id of Ip',
    example: '1',
  })
  IpId?: number;
}
