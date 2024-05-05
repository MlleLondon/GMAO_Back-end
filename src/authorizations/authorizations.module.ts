import { Module } from '@nestjs/common';
import { AuthorizationsService } from './authorizations.service';
import { AuthorizationsController } from './authorizations.controller';

@Module({
  providers: [AuthorizationsService],
  controllers: [AuthorizationsController]
})
export class AuthorizationsModule {}
