import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { History } from './history.entity/history.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HistoriesService {

    constructor(@InjectRepository(History) private historyRepository : Repository<History>) {}

    async getHistories() : Promise<History[]>{
        return await this.historyRepository.find({
            order : {updatedAt : 'ASC'}
        });
    }

    async getHistoriesByTable(_table : string) : Promise<History[]>{
        return await this.historyRepository.find({
            order : {updatedAt : 'ASC'}
        });
    }
}
