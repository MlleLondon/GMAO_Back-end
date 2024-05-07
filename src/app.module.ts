import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorizationsModule } from './authorizations/authorizations.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { EquipmentsModule } from './equipments/equipments.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "mysql",
    "host":  "localhost",
    "port":  3306,
    "username": "root",
    "password": "",
    "database": "gmao_db",
    "entities": ["dist/**/**.entity{.ts,.js}"],
    "synchronize": true
  }), UsersModule, RolesModule, AuthorizationsModule, OrganizationsModule, EquipmentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
