import { Module } from '@nestjs/common';
import { AuthorizationsService } from './authorizations.service';
import { AuthorizationsController } from './authorizations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Authorization } from './authorization.entity/authorization.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Authorization])],
  providers: [AuthorizationsService],
  controllers: [AuthorizationsController],
  exports : [AuthorizationsService],
})
export class AuthorizationsModule {}
