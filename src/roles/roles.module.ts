import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { Role } from './role.entity/role.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorizationsModule } from 'src/authorizations/authorizations.module';

@Module({
  imports : [TypeOrmModule.forFeature([Role]), AuthorizationsModule],
  providers: [RolesService],
  controllers: [RolesController]
})
export class RolesModule {}
