import { Module } from '@nestjs/common';
import { WoTypesService } from './wo-types.service';
import { WoTypesController } from './wo-types.controller';
import { WoType } from './wo-type.entity/wo-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports : [TypeOrmModule.forFeature([WoType])],
  providers: [WoTypesService],
  controllers: [WoTypesController]
})
export class WoTypesModule {}
