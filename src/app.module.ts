import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users.module';
import { RolesModule } from './modules/roles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorizationsModule } from './modules/authorizations.module';
import { OrganizationsModule } from './modules/organizations.module';
import { EquipmentsModule } from './modules/equipments.module';
import { BuildingsModule } from './modules/buildings.module';
import { HistoriesModule } from './modules/histories.module';
import { NotificationsModule } from './modules/notifications.module';
import { VendorsModule } from './modules/vendors.module';
import { PartsModule } from './modules/parts.module';
import { WoTypesModule } from './modules/wo-types.module';
import { FrequenciesModule } from './modules/frequencies.module';
import { WorkOrdersModule } from './modules/work-orders.module';
import { ReportsModule } from './modules/reports.module';
import { InterventionsModule } from './modules/interventions.module';

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
  }), UsersModule, RolesModule, AuthorizationsModule, OrganizationsModule, EquipmentsModule, BuildingsModule, 
    HistoriesModule, NotificationsModule, VendorsModule, PartsModule, WoTypesModule, FrequenciesModule, WorkOrdersModule, ReportsModule,
    InterventionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
