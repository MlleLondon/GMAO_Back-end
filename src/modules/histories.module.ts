import { Module } from '@nestjs/common';
import { HistoriesService } from 'src/services/histories/histories.service';
import { HistoriesController } from 'src/controllers/histories/histories.controller';
import { History } from 'src/entities/history/history.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports : [TypeOrmModule.forFeature([History]),],
  providers: [HistoriesService],
  controllers: [HistoriesController]
})
export class HistoriesModule {}
