import { Module } from '@nestjs/common';
import { FrequenciesService } from 'src/services/frequencies/frequencies.service';
import { FrequenciesController } from 'src/controllers/frequencies/frequencies.controller';
import { Frequency } from 'src/entities/frequency/frequency.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports : [TypeOrmModule.forFeature([Frequency])],
  providers: [FrequenciesService],
  controllers: [FrequenciesController]
})
export class FrequenciesModule {}
