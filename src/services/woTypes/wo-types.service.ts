import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WoType } from 'src/entities/woType/wo-type.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class WoTypesService {

    constructor(@InjectRepository(WoType) private woTypeRepository: Repository<WoType>){}

    async getWoTypes(): Promise<WoType[]>{
        return await this.woTypeRepository.find({
            order: {name: 'ASC'},
        });
    }

    async getWoTypesBySearch(_search: string): Promise<WoType[]>{
        return await this.woTypeRepository.find({
            where: [
                {name: Like(`%${_search}%`)},
                {label: Like(`%${_search}%`)},
            ],
            order: {name: 'ASC'},
        });
    }

    async getWoTypeById(_id: number): Promise<WoType>{
        return await this.woTypeRepository.findOneBy({id: _id});
    }

    async createWoType(woType: WoType){
        return await this.woTypeRepository.save(woType);
    }

    async updateWoType(woType: WoType){
        return await this.woTypeRepository.save(woType);
    }

    async deleteWoType(woType: WoType){
        return await this.woTypeRepository.delete(woType);
    }
}
