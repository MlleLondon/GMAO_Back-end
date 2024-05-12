import { Module } from '@nestjs/common';
import { IncidentTypesService } from './incident-types.service';
import { IncidentTypesController } from './incident-types.controller';
import { IncidentType } from './incident-type.entity/incident-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports : [TypeOrmModule.forFeature([IncidentType])],
  providers: [IncidentTypesService],
  controllers: [IncidentTypesController]
})
export class IncidentTypesModule {}
