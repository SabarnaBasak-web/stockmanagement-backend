import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRoleDto {
  @IsString()
  name: string;
  @IsNotEmpty()
  routes: string;
}
