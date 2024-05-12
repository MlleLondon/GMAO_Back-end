import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Purchase } from './purchase.entity/purchase.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PurchasesService {

    constructor(@InjectRepository(Purchase) private purchaseRepository: Repository<Purchase>){}

    async getPurchases(): Promise<Purchase[]>{
        return await this.purchaseRepository.find({
            order: {datePurchase: 'ASC'}
        });
    }

    async getPurchasesBySearchDate(_date: Date): Promise<Purchase[]> {
        return await this.purchaseRepository
            .createQueryBuilder("purchase")
            .where("purchase.datePurchase LIKE :date", { date: `%${_date}%` })
            .orderBy("purchase.datePurchase", "ASC")
            .getMany();
    }

    async getPurchaseById(_id: number): Promise<Purchase>{
        return await this.purchaseRepository.findOneBy({id: _id});
    }

    async createPurchase(purchase: Purchase){
        return await this.purchaseRepository.save(purchase);
    }

    async updatePurchase(purchase : Purchase){
        return await this.purchaseRepository.save(purchase);
    }

    async deletePurchase(purchase : Purchase){
        return await this.purchaseRepository.delete(purchase);
    }
}
