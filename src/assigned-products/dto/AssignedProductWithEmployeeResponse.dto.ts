import { ApiProperty } from '@nestjs/swagger';
import { EmployeeResponseDto } from 'src/employee/dto';

export class AssignedProductWithEmployeeDetailsResponseDto {
  @ApiProperty({
    description: 'unique id of the assigned product',
    example: '1',
  })
  id: number;

  @ApiProperty({ description: 'ipId', example: 'ip-001' })
  ipId: number;

  @ApiProperty({ description: 'employee id', example: 'emp-001' })
  empId: string;

  @ApiProperty({ description: 'product-id', example: 'product-001' })
  productId: number;

  @ApiProperty({
    description: 'product serial number',
    example: 'serial-#001',
  })
  serialNo: string;

  @ApiProperty({
    description: 'issue date',
    example: '08-02-2004',
  })
  dateOfIssue: Date;

  @ApiProperty({
    description: 'return date',
    example: '08-02-2004',
  })
  dateOfReturn: Date;

  @ApiProperty({
    description: 'employee details',
    example: EmployeeResponseDto,
  })
  employee: EmployeeResponseDto;
}
