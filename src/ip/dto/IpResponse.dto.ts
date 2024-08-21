import { ApiProperty } from '@nestjs/swagger';
import { EmployeeResponseDto } from 'src/employee/dto';

export class IpDataResponseDto {
  @ApiProperty({ description: 'unique id of ip', example: '10001' })
  id: string;
  @ApiProperty({ description: 'ip value', example: '10.10.2.1' })
  ipNumber: string;
  @ApiProperty({ description: 'whether ip is active or not', example: 'false' })
  active: boolean;
  @ApiProperty({ description: 'whether ip is in use', example: 'false' })
  inUse: boolean;
}

export class IpResponseDto {
  @ApiProperty({ description: 'List of all Ips' })
  data: IpDataResponseDto;
  @ApiProperty({ description: 'total number of rows', example: '10' })
  total: number;
}
export class IpAssignedResponseDto {
  @ApiProperty({ description: 'unique id of ip', example: '10001' })
  id: string;
  @ApiProperty({ description: 'ip value', example: '10.10.2.1' })
  ipNumber: string;
  @ApiProperty({ description: 'whether ip is active or not', example: 'true' })
  active: boolean;
  @ApiProperty({ description: 'whether ip is in use', example: 'true' })
  inUse: boolean;
}

export class IpWithEmployeeResponseDto {
  @ApiProperty({ description: 'unique id of ip', example: '10001' })
  id: string;
  @ApiProperty({ description: 'ip value', example: '10.10.2.1' })
  ipNumber: string;
  @ApiProperty({ description: 'whether ip is active or not', example: 'true' })
  active: boolean;
  @ApiProperty({ description: 'whether ip is in use', example: 'true' })
  inUse: boolean;
  @ApiProperty({
    description: 'Employee details',
    example: [
      {
        id: 1,
        name: 'John Doe',
        designation: 'consultant',
        cell: 'mis',
        floorNumber: '4',
        mobileNumber: '1234567890',
        empId: 'e-001',
        active: true,
        ipId: 10001,
      },
    ],
  })
  Employee: EmployeeResponseDto[];
}
