import { Module } from '@nestjs/common';
import { HistoriesService } from './histories.service';
import { HistoriesController } from './histories.controller';

@Module({
  providers: [HistoriesService],
  controllers: [HistoriesController]
})
export class HistoriesModule {}
