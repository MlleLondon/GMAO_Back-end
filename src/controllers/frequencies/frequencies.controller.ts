import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FrequenciesService } from 'src/services/frequencies/frequencies.service';
import { Frequency } from 'src/entities/frequency/frequency.entity';

@Controller('frequencies')
export class FrequenciesController {

    constructor(private service : FrequenciesService) {}

    @Get()
    getAll(@Param() params){
        return this.service.getFrequencies();
    }

    @Get(':id')
    getById(@Param() params){
        return this.service.getFrequencyById(params.id);
    }

    @Get('date/:date')
    getByDate(@Param() params){
        return this.service.getFrequenciesByDate(params.date);
    }

    @Get('search/:search')
    getBySearch(@Param() params){
        return this.service.getFrequenciesBySearchDate(params.search);
    }

    @Post()
    create(@Body() frequency: Frequency){
        return this.service.createFrequency(frequency);
    }

    @Put()
    update(@Body() frequency : Frequency){
        return this.service.updateFrequency(frequency);
    }

    @Delete(':id')
    delete(@Param() params){
        return this.service.deleteFrequency(params.id);
    }
}
