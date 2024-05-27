import { Module } from '@nestjs/common';
import { AuthorizationsService } from 'src/services/authorizations/authorizations.service';
import { AuthorizationsController } from 'src/controllers/authorizations/authorizations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Authorization } from 'src/entities/authorization/authorization.entity';
import { PickedPartModule } from './picked-part.module';

@Module({
  imports : [TypeOrmModule.forFeature([Authorization]), PickedPartModule],
  providers: [AuthorizationsService],
  controllers: [AuthorizationsController],
  exports : [AuthorizationsService],
})
export class AuthorizationsModule {}
