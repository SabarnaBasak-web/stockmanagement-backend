import { Module } from '@nestjs/common';
import { RoutesController } from './routes.controller';
import { RoutesService } from './routes.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [RoutesController],
  providers: [RoutesService, JwtService],
})
export class RoutesModule {}
