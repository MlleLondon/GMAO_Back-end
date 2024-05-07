import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Equipment } from './equipment.entity/equipment.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class EquipmentsService {

    constructor(@InjectRepository(Equipment) private equipmentRepository : Repository<Equipment>){}

    async getEquipments(): Promise<Equipment[]>{
        return await this.equipmentRepository.find({
            order : {name: 'ASC'}
        });
    }

    async getEquipmentsBySearch(_search : string): Promise<Equipment[]>{
        return await this.equipmentRepository.find({
            where:[
                {name : Like(`%${_search}%`)},
                {type : Like(`%${_search}%`)}
            ],
            order : {name: 'ASC'}
        });
    }

    async getEquipmentsByType(_type : string): Promise<Equipment[]>{
        return await this.equipmentRepository.find({
            where:[
                {type : _type}
            ],
            order : {name: 'ASC'}
        });
    }

    async getEquipmentById(_id: number): Promise<Equipment>{
        return await this.equipmentRepository.findOneBy({id: _id});
    }

    async createEquipment(equipment: Equipment){
        return await this.equipmentRepository.save(equipment);
    }

    async updateEquipment(equipment: Equipment){
        return await this.equipmentRepository.save(equipment);
    }

    async deleteEquipment(equipment: Equipment){
        return await this.equipmentRepository.delete(equipment);
    }
}
