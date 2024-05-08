import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BuildingsService } from './buildings.service';
import { Building } from './building.entity/building.entity';

@Controller('buildings')
export class BuildingsController {

    constructor(private service : BuildingsService){}

    @Get()
    getAll(@Param() params){
        return this.service.getBuildings();
    }

    @Get(':id')
    getById(@Param() params){
        return this.service.getBuildingById(params.id);
    }

    @Get('search/:search')
    getBySearch(@Param() params){
        return this.service.getBuildingsBySearch(params.search);
    }

    @Get('type/:type')
    getByType(@Param() params){
        return this.service.getBuildingsByType(params.type);
    }

    @Post()
    create(@Body() building: Building){
        return this.service.createBuilding(building);
    }

    @Put()
    update(@Body() building: Building){
        return this.service.updateBuilding(building);
    }

    @Delete(':id')
    delete(@Param() params){
        return this.service.deleteBuilding(params.id);
    }
}
