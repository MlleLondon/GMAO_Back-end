import { Module } from '@nestjs/common';
import { RolesService } from 'src/services/roles/roles.service';
import { RolesController } from 'src/controllers/roles/roles.controller';
import { Role } from 'src/entities/role/role.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorizationsModule } from './authorizations.module';

@Module({
  imports : [TypeOrmModule.forFeature([Role]), AuthorizationsModule],
  providers: [RolesService],
  controllers: [RolesController]
})
export class RolesModule {}
