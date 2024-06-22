import { HttpException, HttpStatus } from '@nestjs/common';

export function httpExceptionHandler(message: string, statusCode: HttpStatus) {
  throw new HttpException(message, statusCode);
}
