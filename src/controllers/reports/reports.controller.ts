import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Report } from 'src/entities/report/report.entity';
import { ReportsService } from 'src/services/reports/reports.service';

@Controller('reports')
export class ReportsController {

    constructor(private service: ReportsService){}

    @Get()
    getAll(@Param() params){
        return this.service.getReports();
    }

    @Get(':id')
    getById(@Param() params){
        return this.service.getReportById(params.id);
    }

    @Get('search/:search')
    getBySearch(@Param() params){
        return this.service.getReportsBySearch(params.search);
    }

    @Get('isSigned/:isSigned')
    getBySigned(@Param() params){
        return this.service.getReportsByIsSigned(params.isSigned);
    }

    @Get('isRefused/:isRefused')
    getByRefused(@Param() params){
        return this.service.getReportsByIsRefused(params.isRefused);
    }

    @Post()
    create(@Body() report: Report){
        return this.service.createReport(report);
    }

    @Put()
    update(@Body() report : Report){
        return this.service.updateReport(report);
    }

    @Delete(':id')
    delete(@Param() params){
        return this.service.deleteReport(params.id);
    }
}
