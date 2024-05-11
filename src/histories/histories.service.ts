import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { History } from './history.entity/history.entity';
import { Repository } from 'typeorm';
import { TableAccess } from 'src/variables/enum';

@Injectable()
export class HistoriesService {

    constructor(@InjectRepository(History) private historyRepository : Repository<History>) {}

    async getHistories() : Promise<History[]>{
        return await this.historyRepository.find({
            order : {updatedAt : 'ASC'}
        });
    }

    async getHistoriesByTable(_table : TableAccess) : Promise<History[]>{
        return await this.historyRepository.find({
            where : [
                {nameTable : _table}
            ],
            order : {updatedAt : 'ASC'}
        });
    }

    async getHistoriesByTableAndRecord(_table : TableAccess, _recordId: number) : Promise<History[]>{
        return await this.historyRepository.find({
            where : [
                {nameTable : _table},
                { recordId : _recordId},
            ],
            order : {updatedAt : 'ASC'}
        });
    }

    async getHistoryById(_id: number) : Promise<History>{
        return await this.historyRepository.findOneBy({id : _id})
    }

    async createHistory(history : History){
        return await this.historyRepository.save(history);
    }

    async updateHistory(history : History){
        return await this.historyRepository.save(history);
    }

    async deleteHistory(history : History){
        return await this.historyRepository.delete(history);
    }
}
