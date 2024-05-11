import { Module } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { PurchasesController } from './purchases.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Purchase } from './purchase.entity/purchase.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Purchase])],
  providers: [PurchasesService],
  controllers: [PurchasesController]
})
export class PurchasesModule {}
