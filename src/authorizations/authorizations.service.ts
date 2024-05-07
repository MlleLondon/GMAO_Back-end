import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Authorization } from './authorization.entity/authorization.entity';
import { Repository } from 'typeorm';
import { TableAccess } from 'src/variables/enum';
import { Role } from 'src/roles/role.entity/role.entity';

@Injectable()
export class AuthorizationsService {

    constructor(@InjectRepository(Authorization) private authoRepository : Repository<Authorization>) {}

    async getAuthos() : Promise<Authorization[]>{
        return await this.authoRepository.find({
            relations: ['roles'],
            order: {tableAccess : 'ASC'}
        });
    }

    async getAuthoById(_id : number) : Promise<Authorization>{
        return await this.authoRepository.findOne({
            where:[
                {id: _id}
            ],
            relations: ['roles'],
            order: {tableAccess : 'ASC'}
        });
    }
    async getAuthosByType(_type : string) : Promise<Authorization[]>{
        return await this.authoRepository.find({
            where:[
                {type: _type}
            ],
            relations: ['roles'],
            order: {tableAccess : 'ASC'}
        });
    }

    //Liste l'ensemble des éléments de TableAccess
    async getAllTableAccess(): Promise<string[]> {
        return Object.values(TableAccess);
    }

    async getAuthosByTable(_table : string) : Promise<Authorization[]>{
        return await this.authoRepository.find({
            where:[
                {tableAccess: _table as TableAccess}
            ],
            relations: ['roles'],
            order: {tableAccess : 'ASC'}
        });
    }
    
    async createAutho(autho : Authorization){
        return await this.authoRepository.save(autho);
    }

    async updateAutho(autho : Authorization){
        return await this.authoRepository.save(autho);
    }

    async deleteAutho(autho : Authorization){
        return await this.authoRepository.delete(autho);
    }
}
