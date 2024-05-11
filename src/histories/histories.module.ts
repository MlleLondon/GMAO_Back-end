import { Module } from '@nestjs/common';
import { HistoriesService } from './histories.service';
import { HistoriesController } from './histories.controller';
import { History } from './history.entity/history.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports : [TypeOrmModule.forFeature([History]),],
  providers: [HistoriesService],
  controllers: [HistoriesController]
})
export class HistoriesModule {}
