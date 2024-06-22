import { ApiProperty } from '@nestjs/swagger';

export class IpResponseDto {
  @ApiProperty({ description: 'unique id of ip', example: '10001' })
  id: string;
  @ApiProperty({ description: 'ip value', example: '10.10.2.1' })
  ipNumber: string;
  @ApiProperty({ description: 'whether ip is active or not', example: 'false' })
  active: boolean;
  @ApiProperty({ description: 'whether ip is in use', example: 'false' })
  inUse: boolean;
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
