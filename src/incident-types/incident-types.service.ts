import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IncidentType } from './incident-type.entity/incident-type.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class IncidentTypesService {

    constructor(@InjectRepository(IncidentType) private iTRepository: Repository<IncidentType>){}

    async getIncidentTypes(): Promise<IncidentType[]>{
        return await this.iTRepository.find({
            order: {name: 'ASC'},
        });
    }

    async getIncidentTypesBySearch(_search: number): Promise<IncidentType[]>{
        return await this.iTRepository.find({
            where: [
                {name: Like(`%${_search}%`)},
                {description: Like(`%${_search}%`)},
            ],
            order: {name: 'ASC'},
        });
    }

    async getIncidentTypeById(_id: number): Promise<IncidentType>{
        return await this.iTRepository.findOneBy({id: _id});
    }

    async createIncidentType(incidentType: IncidentType){
        return await this.iTRepository.save(incidentType);
    }

    async updateIncidentType(incidentType: IncidentType){
        return await this.iTRepository.save(incidentType);
    }

    async deleteIncidentType(incidentType: IncidentType){
        return await this.iTRepository.delete(incidentType);
    }
}
