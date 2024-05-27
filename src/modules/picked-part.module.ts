import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PickedPartController } from 'src/controllers/picked-part/picked-part.controller';
import { PickedPart } from 'src/entities/picked-part.entity/picked-part.entity';
import { PickedPartService } from 'src/services/picked-part/picked-part.service';

@Module({
    imports : [TypeOrmModule.forFeature([PickedPart])],
    providers: [PickedPartService],
    controllers: [PickedPartController]
  })
export class PickedPartModule {
    
}
