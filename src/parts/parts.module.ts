import { Module } from '@nestjs/common';
import { PartsService } from './parts.service';
import { PartsController } from './parts.controller';
import { Part } from './part.entity/part.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports : [TypeOrmModule.forFeature([Part])],
  providers: [PartsService],
  controllers: [PartsController]
})
export class PartsModule {}
