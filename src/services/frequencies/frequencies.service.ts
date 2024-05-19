import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Frequency } from 'src/entities/frequency/frequency.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class FrequenciesService {
    constructor(@InjectRepository(Frequency) private frenquencyRepository : Repository<Frequency>) {}

    async getFrequencies() : Promise<Frequency[]> {
        return await this.frenquencyRepository.find({
            order: {maintenanceDate : 'ASC'},
        });
    }

    async getFrequenciesByDate(_date : Date) : Promise<Frequency[]> {
        return await this.frenquencyRepository.find({
            where : [
                {maintenanceDate : _date}
            ],
            order: {maintenanceDate : 'ASC'},
        });
    }

    async getFrequenciesBySearchDate(_search : string) : Promise<Frequency[]> {
        return await this.frenquencyRepository.createQueryBuilder("frequency")
            .where("DATE_FORMAT(frequency.maintenanceDate, '%Y-%m-%d') LIKE :search", { search: `%${_search}%` })
            .orderBy("frequency.maintenanceDate", "ASC")
            .getMany();
    }

    async getFrequencyById(_id: number) : Promise<Frequency> {
        return await this.frenquencyRepository.findOneBy({id: _id});
    }

    async createFrequency(frequency : Frequency){
        return await this.frenquencyRepository.save(frequency);
    }

    async updateFrequency(frequency : Frequency){
        return await this.frenquencyRepository.save(frequency);
    }

    async deleteFrequency(frequency : Frequency){
        return await this.frenquencyRepository.delete(frequency);
    }
}
