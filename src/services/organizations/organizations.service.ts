import { Injectable } from '@nestjs/common';
import { Organization } from 'src/entities/organization/organization.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrganizationsService {

    constructor(@InjectRepository(Organization) private orgaRepository : Repository<Organization>) {}

    async getOrgas(): Promise<Organization[]> {
        return await this.orgaRepository.find();
    }

    async getOrgasByName(_name : string): Promise<Organization[]> {
        return await this.orgaRepository.find({
            where : [
                { name : _name}
            ],
            order : {name: 'ASC'}
        });
    }

    async getOrgasByZipCode(_zipCode : string): Promise<Organization[]> {
        return await this.orgaRepository.find({
            where : [
                { zipCode : _zipCode}
            ],
            order : {name: 'ASC'}
        });
    }

    async getOrgaById(_id : number): Promise<Organization> {
        return await this.orgaRepository.findOneBy({id: _id});
    }

    async createOrga(orga: Organization){
        return await this.orgaRepository.save(orga);
    }

    async updateOrga(orga: Organization){
        return await this.orgaRepository.save(orga);
    }

    async deleteOrga(orga: Organization){
        return await this.orgaRepository.delete(orga);
    }
}
