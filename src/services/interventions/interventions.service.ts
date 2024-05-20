import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Intervention } from 'src/entities/interventions/intervention.entity/intervention.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InterventionsService {

    constructor(@InjectRepository(Intervention) private interventionRepository: Repository<Intervention>) {}

    async getInterventions(): Promise<Intervention[]> {
        return await this.interventionRepository.find({
            order: {startDate: 'DESC'},
        });
    }

    async getInterventionsByStartDate(_startDate: Date): Promise<Intervention[]> {
        return await this.interventionRepository.find({
            where : [
                {startDate: _startDate}
            ],
            order: {startDate: 'DESC'},
        });
    }

    async getInterventionsByEndDate(_endDate: Date): Promise<Intervention[]> {
        return await this.interventionRepository.find({
            where : [
                {endDate: _endDate}
            ],
            order: {startDate: 'DESC'},
        });
    }

    async getInterventionsBySearch(_search: string): Promise<Intervention[]> {
        return await this.interventionRepository.createQueryBuilder("intervention")
            .where("DATE_FORMAT(intervention.startDate, '%Y-%m-%d') LIKE :search OR DATE_FORMAT(intervention.endDate, '%Y-%m-%d') LIKE :search",
                 { search: `%${_search}%` })
            .orderBy("intervention.startDate", "DESC")
            .getMany();
    }

    async getInterventionById(_id: number): Promise<Intervention> {
        return await this.interventionRepository.findOneBy({id: _id});
    }

    async createIntervention(intervention: Intervention){
        return await this.interventionRepository.save(intervention);
    }

    async updateIntervention(intervention: Intervention){
        return await this.interventionRepository.save(intervention);
    }

    async deleteIntervention(intervention: Intervention){
        return await this.interventionRepository.delete(intervention);
    }
}
