import { Module } from '@nestjs/common';
import { ReportsService } from 'src/services/reports/reports.service';
import { ReportsController } from 'src/controllers/reports/reports.controller';
import { Report } from 'src/entities/report/report.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports : [TypeOrmModule.forFeature([Report])],
  providers: [ReportsService],
  controllers: [ReportsController]
})
export class ReportsModule {}
