import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { HistoriesService } from 'src/services/histories/histories.service';
import { History } from 'src/entities/history/history.entity';

@Controller('histories')
export class HistoriesController {

    constructor(private service : HistoriesService) {}

    @Get()
    getAll(@Param() params){
        return this.service.getHistories();
    }

    @Get(':id')
    getById(@Param() params){
        return this.service.getHistoryById(params.id);
    }

    @Get('table/:table')
    getByTable(@Param() params){
        return this.service.getHistoriesByTable(params.table);
    }

    @Get('table/:table/record/:recordId')
    getByTableAndRecord(@Param() params){
        return this.service.getHistoriesByTableAndRecord(params.table, params.recordId);
    }

    @Post()
    create(@Body() history: History){
        return this.service.createHistory(history);
    }

    @Put()
    update(@Body() history : History){
        return this.service.updateHistory(history);
    }

    @Delete(':id')
    delete(@Param() params){
        return this.service.deleteHistory(params.id);
    }
}
