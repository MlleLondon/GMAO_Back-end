import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Building } from './building.entity/building.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class BuildingsService {
    constructor(@InjectRepository(Building) private buildingRepository : Repository<Building>) {}

    async getBuildings() : Promise<Building[]>{
        return await this.buildingRepository.find({
            order : {name: 'ASC'}
        });
    }

    async getBuildingsBySearch(_search : string) : Promise<Building[]>{
        return await this.buildingRepository.find({
            where: [
                {name : Like(`%${_search}%`)},
                {type : Like(`%${_search}%`)},
            ],
            order : {name : 'ASC'},
        });
    }

    async getBuildingsByType(_type : string) : Promise<Building[]>{
        return await this.buildingRepository.find({
            where: [
                {name : _type},
            ],
            order : {name : 'ASC'},
        });
    }

    async getBuildingById(_id: number) : Promise<Building>{
        return await this.buildingRepository.findOneBy({id: _id});
    }

    async createBuilding(building : Building){
        return await this.buildingRepository.save(building);
    }

    async updateBuilding(building : Building){
        return await this.buildingRepository.save(building);
    }

    async deleteBuilding(building : Building){
        return await this.buildingRepository.delete(building);
    }
}
