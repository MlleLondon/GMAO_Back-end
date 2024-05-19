import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { WoTypesService } from 'src/services/woTypes/wo-types.service';
import { WoType } from 'src/entities/woType/wo-type.entity';

@Controller('wo-types')
export class WoTypesController {

    constructor(private service: WoTypesService){}

    @Get()
    getAll(@Param() params){
        return this.service.getWoTypes();
    }

    @Get(':id')
    getById(@Param() params){
        return this.service.getWoTypeById(params.id);
    }

    @Get('search/:search')
    getBySearch(@Param() params){
        return this.service.getWoTypesBySearch(params.search);
    }

    @Post()
    create(@Body() woType: WoType){
        return this.service.createWoType(woType);
    }

    @Put()
    update(@Body() woType : WoType){
        return this.service.updateWoType(woType);
    }

    @Delete(':id')
    delete(@Param() params){
        return this.service.deleteWoType(params.id);
    }
}
