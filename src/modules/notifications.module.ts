import { Module } from '@nestjs/common';
import { NotificationsService } from 'src/services/notifications/notifications.service';
import { NotificationsController } from 'src/controllers/notifications/notifications.controller';
import { Notification } from 'src/entities/notification/notification.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports : [TypeOrmModule.forFeature([Notification])],
  providers: [NotificationsService],
  controllers: [NotificationsController]
})
export class NotificationsModule {}
