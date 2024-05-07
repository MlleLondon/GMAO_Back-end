import { Module } from '@nestjs/common';
import { EquipmentsService } from './equipments.service';
import { EquipmentsController } from './equipments.controller';
import { Equipment } from './equipment.entity/equipment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports : [TypeOrmModule.forFeature([Equipment])],
  providers: [EquipmentsService],
  controllers: [EquipmentsController]
})
export class EquipmentsModule {}
