import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorizationsModule } from './authorizations/authorizations.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { EquipmentsModule } from './equipments/equipments.module';
import { BuildingsModule } from './buildings/buildings.module';
import { HistoriesModule } from './histories/histories.module';
import { NotificationsModule } from './notifications/notifications.module';
import { VendorsModule } from './vendors/vendors.module';
import { PartsModule } from './parts/parts.module';
import { PurchasesModule } from './purchases/purchases.module';
import { IncidentTypesModule } from './incident-types/incident-types.module';
import { WoTypesModule } from './wo-types/wo-types.module';
import { FrequenciesModule } from './frequencies/frequencies.module';

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
  }), UsersModule, RolesModule, AuthorizationsModule, OrganizationsModule, EquipmentsModule, BuildingsModule, HistoriesModule, NotificationsModule, VendorsModule, PartsModule, PurchasesModule, IncidentTypesModule, WoTypesModule, FrequenciesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
