import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRouteDto {
  @ApiProperty({ description: 'route name', example: 'contact' })
  @IsString()
  name: string;
}
export class GetRouteResponseDto {
  id: number;
  name: string;
}
export class GetRoutesByRoleResponseDto {
  @ApiProperty({ description: 'role id', example: 'role-1' })
  id: number;
  @ApiProperty({ description: 'role name', example: 'role-1' })
  roleName: string;
  @ApiProperty({
    description: 'route list',
    example: [{ id: 'route-01', name: 'route-name' }],
  })
  route: GetRouteResponseDto[];
}
