import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdateIpDto {
  @ApiProperty({ description: 'Ip Number', example: '10.1.1.1' })
  @IsOptional()
  ipNumber: string;

  @ApiProperty({ description: 'is the ip active', example: 'true' })
  @IsOptional()
  active: boolean;

  @ApiProperty({ description: 'ip in use', example: 'false' })
  @IsOptional()
  inUse: boolean;
}
