import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { NotificationsService } from 'src/services/notifications/notifications.service';
import { Notification } from 'src/entities/notification/notification.entity';

@Controller('notifications')
export class NotificationsController {
    constructor(private service : NotificationsService) {}

    @Get()
    getAll(@Param() params){
        return this.service.getNotifications();
    }

    @Get(':id')
    getById(@Param() params){
        return this.service.getNotificationById(params.id);
    }

    @Get('user/:user')
    getByTable(@Param() params){
        return this.service.getNotificationsByUser(params.user);
    }

    @Get('user/:user/table/:table')
    getByTableAndRecord(@Param() params){
        return this.service.getNotificationsByUserAndTable(params.user, params.table);
    }

    @Post()
    create(@Body() notification: Notification){
        return this.service.createNotification(notification);
    }

    @Put()
    update(@Body() notification : Notification){
        return this.service.updateNotification(notification);
    }

    @Delete(':id')
    delete(@Param() params){
        return this.service.deleteNotification(params.id);
    }
}
