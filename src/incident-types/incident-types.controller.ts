import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { IncidentTypesService } from './incident-types.service';
import { IncidentType } from './incident-type.entity/incident-type.entity';

@Controller('incident-types')
export class IncidentTypesController {

    constructor(private service: IncidentTypesService){}

    @Get()
    getAll(@Param() params){
        return this.service.getIncidentTypes();
    }

    @Get(':id')
    getById(@Param() params){
        return this.service.getIncidentTypeById(params.id);
    }

    @Get('search/:search')
    getBySearch(@Param() params){
        return this.service.getIncidentTypesBySearch(params.search);
    }

    @Post()
    create(@Body() incidentType: IncidentType){
        return this.service.createIncidentType(incidentType);
    }

    @Put()
    update(@Body() incidentType : IncidentType){
        return this.service.updateIncidentType(incidentType);
    }

    @Delete(':id')
    delete(@Param() params){
        return this.service.deleteIncidentType(params.id);
    }
}
