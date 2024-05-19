import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PartsService } from 'src/services/parts/parts.service';
import { Part } from 'src/entities/part/part.entity';

@Controller('parts')
export class PartsController {
    
    constructor(private service: PartsService){}

    @Get()
    getAll(@Param() params){
        return this.service.getParts();
    }

    @Get('minLevel')
    getMinLevel(@Param() params){
        return this.service.getPartsMinlevel();
    }

    @Get(':id')
    getById(@Param() params){
        return this.service.getPartById(params.id);
    }

    @Get('reference/:ref')
    getByReference(@Param() params){
        return this.service.getPartsByReference(params.ref);
    }

    @Get('search/:search')
    getBySearch(@Param() params){
        return this.service.getPartsBySearch(params.search);
    }

    @Post()
    create(@Body() part: Part){
        return this.service.createPart(part);
    }

    @Put()
    update(@Body() part : Part){
        return this.service.updatePart(part);
    }

    @Delete(':id')
    delete(@Param() params){
        return this.service.deletePart(params.id);
    }
}
