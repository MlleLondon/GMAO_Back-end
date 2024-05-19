import { Module } from '@nestjs/common';
import { OrganizationsService } from 'src/services/organizations/organizations.service';
import { OrganizationsController } from 'src/controllers/organizations/organizations.controller';
import { Organization } from 'src/entities/organization/organization.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports : [TypeOrmModule.forFeature([Organization])],
  providers: [OrganizationsService],
  controllers: [OrganizationsController]
})
export class OrganizationsModule {}
