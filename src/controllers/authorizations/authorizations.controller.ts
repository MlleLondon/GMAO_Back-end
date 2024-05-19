import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AuthorizationsService } from 'src/services/authorizations/authorizations.service';
import { Authorization } from 'src/entities/authorization/authorization.entity';

@Controller('authorizations')
export class AuthorizationsController {
    constructor(private service: AuthorizationsService){}

    @Get()
    getAll(@Param() params){
        return this.service.getAuthos();
    }

    @Get(':id')
    getById(@Param() params){
        return this.service.getAuthoById(params.id);
    }

    @Get('table/:table')
    getByTable(@Param() params){
        return this.service.getAuthosByTable(params.table);
    }

    @Get('type/:type')
    getByType(@Param() params){
        return this.service.getAuthosByType(params.type);
    }

    @Post()
    create(@Body() autho: Authorization){
        return this.service.createAutho(autho);
    }

    @Put()
    update(@Body() autho : Authorization){
        return this.service.updateAutho(autho);
    }

    @Delete(':id')
    delete(@Param() params){
        return this.service.deleteAutho(params.id);
    }
}
