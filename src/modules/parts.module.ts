import { Module } from '@nestjs/common';
import { PartsService } from 'src/services/parts/parts.service';
import { PartsController } from 'src/controllers/parts/parts.controller';
import { Part } from 'src/entities/part/part.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports : [TypeOrmModule.forFeature([Part])],
  providers: [PartsService],
  controllers: [PartsController]
})
export class PartsModule {}
