import { Module } from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { VendorsController } from './vendors.controller';
import { Vendor } from './vendor.entity/vendor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports : [TypeOrmModule.forFeature([Vendor])],
  providers: [VendorsService],
  controllers: [VendorsController]
})
export class VendorsModule {}
