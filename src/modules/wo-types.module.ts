import { Module } from '@nestjs/common';
import { WoTypesService } from 'src/services/woTypes/wo-types.service';
import { WoTypesController } from 'src/controllers/woTypes/wo-types.controller';
import { WoType } from 'src/entities/woType/wo-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports : [TypeOrmModule.forFeature([WoType])],
  providers: [WoTypesService],
  controllers: [WoTypesController]
})
export class WoTypesModule {}
