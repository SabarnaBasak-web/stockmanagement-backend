import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  SignUpResponseDto,
  loginResponseDto,
  AuthDto,
  SignUpAuthDto,
} from './dto/auth.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  @ApiCreatedResponse({
    description: 'User signed up successfully',
    type: SignUpResponseDto,
  })
  @ApiBadRequestResponse({ description: 'Invalid request' })
  @ApiNotFoundResponse({ description: 'Roles not found' })
  signUp(@Body() dto: SignUpAuthDto) {
    return this.authService.signUp(dto);
  }

  @Post('login')
  @ApiOkResponse({
    description: 'Login successful response',
    type: loginResponseDto,
  })
  @ApiForbiddenResponse({ description: 'Incorrect Login Credentials' })
  login(@Body() dto: AuthDto) {
    return this.authService.login(dto);
  }
}
