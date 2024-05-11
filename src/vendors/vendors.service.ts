import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vendor } from './vendor.entity/vendor.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class VendorsService {

    constructor(@InjectRepository(Vendor) private vendorRepository : Repository<Vendor>){}

    async getVendors(): Promise<Vendor[]>{
        return await this.vendorRepository.find({
            order: {name: 'ASC'},
        });
    }

    async getVendorsByZipCode(_zipCode: string): Promise<Vendor[]>{
        return await this.vendorRepository.find({
            where: [
                {zipCode : _zipCode},
            ],
            order: {name: 'ASC'},
        });
    }

    async getVendorsByCity(_city: string): Promise<Vendor[]>{
        return await this.vendorRepository.find({
            where: [
                {city: _city},
            ],
            order: {name: 'ASC'},
        });
    }

    async getVendorsBySearch(_search: string): Promise<Vendor[]>{
        return await this.vendorRepository.find({
            where: [
                {name : Like(`%${_search}%`)},
                {zipCode : Like(`%${_search}%`)},
                {city: Like(`%${_search}%`)},
            ],
            order: {name: 'ASC'},
        });
    }

    async getVendorById(_id: number): Promise<Vendor>{
        return await this.vendorRepository.findOneBy({id: _id});
    }

    async createVendor(vendor: Vendor){
        return await this.vendorRepository.save(vendor);
    }

    async updateVendor(vendor : Vendor){
        return await this.vendorRepository.save(vendor);
    }

    async deleteVendor(vendor : Vendor){
        return await this.vendorRepository.delete(vendor);
    }
}
