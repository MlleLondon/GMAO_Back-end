import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Notification } from 'src/entities/notification/notification.entity';
import { Repository } from 'typeorm';
import { TableAccess } from 'src/variables/enum';

@Injectable()
export class NotificationsService {

    constructor(@InjectRepository(Notification) private notificationRepository : Repository<Notification>) {}

    async getNotifications() : Promise<Notification[]>{
        return await this.notificationRepository.find({
            order: {notifiedAt : 'ASC'}
        });
    }

    async getNotificationsByUser(_idUser : number) : Promise<Notification[]>{
        return await this.notificationRepository.find({
            where : [
                {idUser : _idUser},
            ],
            order: {notifiedAt : 'ASC'}
        });
    }

    async getNotificationsByUserAndTable(_idUser : number, _table : TableAccess) : Promise<Notification[]>{
        return await this.notificationRepository.find({
            where : [
                {idUser : _idUser},
                {nameTable : _table}
            ],
            order: {notifiedAt : 'ASC'}
        });
    }

    async getNotificationById(_id : number) : Promise<Notification> {
        return await this.notificationRepository.findOneBy({id: _id});
    }

    async createNotification(notification : Notification){
        return await this.notificationRepository.save(notification);
    }

    async updateNotification(notification : Notification){
        return await this.notificationRepository.save(notification);
    }

    async deleteNotification(notification : Notification){
        return await this.notificationRepository.delete(notification);
    }
}
