import { Module } from '@nestjs/common';
import { CpuController } from './cpu.controller';

@Module({
  controllers: [CpuController]
})
export class CpuModule {}
