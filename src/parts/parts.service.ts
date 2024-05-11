import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Part } from './part.entity/part.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class PartsService {

    constructor(@InjectRepository(Part) private partRepository: Repository<Part>){}

    async getParts(): Promise<Part[]>{
        return await this.partRepository.find({
            order: {name: 'ASC'},
        });
    }

    async getPartsMinlevel(): Promise<Part[]> {
        return await this.partRepository.createQueryBuilder('part')
            .where('part.totalParts <= part.minInventoryLevel')
            .orderBy('part.name', 'ASC')
            .getMany();
    }

    async getPartsBySearch(_search: string): Promise<Part[]>{
        return await this.partRepository.find({
            where: [
                {name: Like(`%${_search}%`)},
                {reference: Like(`%${_search}%`)},
            ],
            order: {name: 'ASC'},
        });
    }

    async getPartsByReference(_reference: string): Promise<Part[]>{
        return await this.partRepository.find({
            where: [
                {reference: _reference}
            ],
            order: {name: 'ASC'},
        });
    }

    async getPartById(_id: number): Promise<Part>{
        return await this.partRepository.findOneBy({id: _id});
    }

    async createPart(part: Part){
        return await this.partRepository.save(part);
    }

    async updatePart(part : Part){
        return await this.partRepository.save(part);
    }

    async deletePart(part : Part){
        return await this.partRepository.delete(part);
    }
}
