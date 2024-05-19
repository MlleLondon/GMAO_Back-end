import { Module } from '@nestjs/common';
import { VendorsService } from 'src/services/venders/vendors.service';
import { VendorsController } from 'src/controllers/vendors/vendors.controller';
import { Vendor } from 'src/entities/vendor/vendor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports : [TypeOrmModule.forFeature([Vendor])],
  providers: [VendorsService],
  controllers: [VendorsController]
})
export class VendorsModule {}
