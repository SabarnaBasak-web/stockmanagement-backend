import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { IpModule } from './ip/ip.module';
import { ProductModule } from './product/product.module';
import { RoutesModule } from './routes/routes.module';
import { RolesModule } from './roles/roles.module';
import { EmployeeModule } from './employee/employee.module';
import { CpuModule } from './cpu/cpu.module';
import { AssignedProductsModule } from './assigned-products/assigned-products.module';
import { UpsModule } from './ups/ups.module';
import { VendorModule } from './vendor/vendor.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    IpModule,
    ProductModule,
    RoutesModule,
    RolesModule,
    EmployeeModule,
    CpuModule,
    AssignedProductsModule,
    UpsModule,
    VendorModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
