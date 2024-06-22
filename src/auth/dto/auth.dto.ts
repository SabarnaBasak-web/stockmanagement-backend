import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class AuthDto {
  @ApiProperty({ description: 'user name', example: 'johndoe' })
  @IsNotEmpty()
  username: string;
  @ApiProperty({ description: 'password', example: 'password' })
  @IsNotEmpty()
  password: string;
}

export class SignUpAuthDto {
  @ApiProperty({ description: 'user name', example: 'johndoe' })
  @IsNotEmpty()
  username: string;
  @ApiProperty({ description: 'password', example: 'password' })
  @IsNotEmpty()
  password: string;
  @ApiProperty({ description: 'confirm password', example: 'password' })
  @IsNotEmpty()
  confirmPassword: string;
  @ApiProperty({ description: 'roleId', example: '1234', type: 'number' })
  @IsNotEmpty()
  @IsNumber()
  roleId: number;
}

export class SignUpResponseDto {
  @ApiProperty({ description: 'unique id of the row', example: '001' })
  id: number;
  @ApiProperty({ description: 'username', example: 'johndoe' })
  username: string;
  @ApiProperty({
    description: 'unique path of the image',
    example: '/username_id/image.jpg',
  })
  imagePath: string;
  @ApiProperty({
    description: 'unique id of the role assigned to the user',
    example: 'role-01',
  })
  roleId: number;
}

export class loginResponseDto {
  @ApiProperty({
    description: 'token value',
    example:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoidGVzdCIsInJvdXRlcyI6WyIvZGFzaGJvYXJkIiwiL2NwdSIsIi9wcm9kdWN0IiwiL21vbml0b3IiLCIvdXBzIiwiL3ZlbmRvciIsIi9hbWMiLCIvdXNlciIsIi9jYWxsX2xvZ19wYWdlIiwiL2FtY19jYWxsX2xvZ19wYWdlIiwiL3JlcG9ydCJdLCJyb2xlIjoic3VwZXJBZG1pbiIsImlhdCI6MTcxNzI2NTEwNywiZXhwIjoxNzE3MjY2MDA3fQ.DwUrLGaHLTbEgy3DR3wh7YHAz-msZUdu6nYKivkIG6A',
  })
  access_token: string;
}
