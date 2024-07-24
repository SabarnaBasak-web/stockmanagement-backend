import { ApiProperty } from '@nestjs/swagger';
import { IpResponseDto } from 'src/ip/dto';

export class EmployeeResponseDto {
  @ApiProperty({ description: 'Name of employee', example: 'John Doe' })
  name: string;
  @ApiProperty({
    description: 'Designation of employee',
    example: 'Consultant',
  })
  designation: string;
  @ApiProperty({
    description: 'cell number of employee',
    example: 'cell-001',
  })
  cell: string;
  @ApiProperty({
    description: 'Floor number',
    example: '7',
  })
  floorNumber: string;
  @ApiProperty({
    description: 'Phone number of employee',
    example: '1234567890',
  })
  mobileNumber: string;
  @ApiProperty({
    description: 'Employee Id of employee',
    example: 'emp-001',
  })
  empId: string;
  @ApiProperty({
    description: 'Active user',
    example: 'true',
  })
  active: boolean;
  @ApiProperty({
    description: 'Id of Ip',
    example: '1',
  })
  IpId: number;
  @ApiProperty({
    description: 'Ip details',
    example: { id: 1, ipName: '1.1.1.1', active: false, inUse: false },
  })
  Ip: IpResponseDto;
}
