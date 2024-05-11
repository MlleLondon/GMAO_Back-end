import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { Vendor } from './vendor.entity/vendor.entity';

@Controller('vendors')
export class VendorsController {

    constructor(private service: VendorsService){}

    @Get()
    getAll(@Param() params){
        return this.service.getVendors();
    }

    @Get(':id')
    getById(@Param() params){
        return this.service.getVendorById(params.id);
    }

    @Get('search/:search')
    getBySearch(@Param() params){
        return this.service.getVendorsBySearch(params.search);
    }

    @Get('zip/:zip')
    getByZip(@Param() params){
        return this.service.getVendorsByZipCode(params.zip);
    }

    @Get('city/:city')
    getByCity(@Param() params){
        return this.service.getVendorsByCity(params.city);
    }

    @Post()
    create(@Body() vendor: Vendor){
        return this.service.createVendor(vendor);
    }

    @Put()
    update(@Body() vendor : Vendor){
        return this.service.updateVendor(vendor);
    }

    @Delete(':id')
    delete(@Param() params){
        return this.service.deleteVendor(params.id);
    }
}
