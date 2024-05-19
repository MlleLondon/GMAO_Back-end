import { Module } from '@nestjs/common';
import { BuildingsService } from 'src/services/buildings/buildings.service';
import { BuildingsController } from 'src/controllers/buildings/buildings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Building } from 'src/entities/building/building.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Building])],
  providers: [BuildingsService],
  controllers: [BuildingsController]
})
export class BuildingsModule {}
