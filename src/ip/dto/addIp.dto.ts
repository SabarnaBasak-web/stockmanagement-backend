import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AddIpDto {
  @ApiProperty({ description: 'ip value', example: '10.10.2.1' })
  @IsNotEmpty()
  ipNumber: string;
  @ApiProperty({ description: 'whether ip is active or not', example: 'false' })
  @IsNotEmpty()
  active: boolean;
  @ApiProperty({ description: 'whether ip is in use', example: 'false' })
  @IsNotEmpty()
  inUse: boolean;
}
