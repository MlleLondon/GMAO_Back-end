import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { Purchase } from './purchase.entity/purchase.entity';

@Controller('purchases')
export class PurchasesController {

    constructor(private service: PurchasesService){}

    @Get()
    getAll(@Param() params){
        return this.service.getPurchases();
    }

    @Get(':id')
    getById(@Param() params){
        return this.service.getPurchaseById(params.id);
    }

    @Get('search/:search')
    getBySearch(@Param() params){
        return this.service.getPurchasesBySearchDate(params.search);
    }

    @Post()
    create(@Body() purchase: Purchase){
        return this.service.createPurchase(purchase);
    }

    @Put()
    update(@Body() purchase : Purchase){
        return this.service.updatePurchase(purchase);
    }

    @Delete(':id')
    delete(@Param() params){
        return this.service.deletePurchase(params.id);
    }
}
