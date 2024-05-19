import { Module } from '@nestjs/common';
import { EquipmentsService } from 'src/services/equipments/equipments.service';
import { EquipmentsController } from 'src/controllers/equipments/equipments.controller';
import { Equipment } from 'src/entities/equipment/equipment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports : [TypeOrmModule.forFeature([Equipment])],
  providers: [EquipmentsService],
  controllers: [EquipmentsController]
})
export class EquipmentsModule {}
