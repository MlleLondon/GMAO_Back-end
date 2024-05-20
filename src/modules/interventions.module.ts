import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterventionsController } from 'src/controllers/interventions/interventions.controller';
import { Intervention } from 'src/entities/interventions/intervention.entity/intervention.entity';
import { InterventionsService } from 'src/services/interventions/interventions.service';

@Module({
    imports : [TypeOrmModule.forFeature([Intervention])],
    providers: [InterventionsService],
    controllers: [InterventionsController]
})
export class InterventionsModule {}
