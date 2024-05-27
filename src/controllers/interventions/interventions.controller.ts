import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Intervention } from 'src/entities/interventions/intervention.entity/intervention.entity';
import { InterventionsService } from 'src/services/interventions/interventions.service';

@Controller('interventions')
export class InterventionsController {

    constructor(private service: InterventionsService){}

    @Get()
    getAll(@Param() params){
        return this.service.getInterventions();
    }

    @Get(':id')
    getById(@Param() params){
        return this.service.getInterventionById(params.id);
    }

    @Get('startDate/:date')
    getByStartDate(@Param() params){
        return this.service.getInterventionsByStartDate(params.date);
    }

    @Get('endDate/:date')
    getByEndDate(@Param() params){
        return this.service.getInterventionsByEndDate(params.date);
    }

    @Get('search/:search')
    getBySearch(@Param() params){
        return this.service.getInterventionsByEndDate(params.search);
    }

    @Post()
    create(@Body() intervention: Intervention){
        return this.service.createIntervention(intervention);
    }

    @Put()
    update(@Body() intervention : Intervention){
        return this.service.updateIntervention(intervention);
    }

    @Delete(':id')
    delete(@Param() params){
        return this.service.deleteIntervention(params.id);
    }
}
