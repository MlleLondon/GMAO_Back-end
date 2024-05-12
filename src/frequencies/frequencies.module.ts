import { Module } from '@nestjs/common';
import { FrequenciesService } from './frequencies.service';
import { FrequenciesController } from './frequencies.controller';
import { Frequency } from './frequency.entity/frequency.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports : [TypeOrmModule.forFeature([Frequency])],
  providers: [FrequenciesService],
  controllers: [FrequenciesController]
})
export class FrequenciesModule {}
