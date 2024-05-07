import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EquipmentsService } from './equipments.service';
import { Equipment } from './equipment.entity/equipment.entity';

@Controller('equipments')
export class EquipmentsController {

    constructor(private service : EquipmentsService) {}

    @Get()
    getAll(@Param() params){
        return this.service.getEquipments();
    }

    @Get(':id')
    getById(@Param() params){
        return this.service.getEquipmentById(params.id);
    }

    @Get('search/:search')
    getBySearch(@Param() params){
        return this.service.getEquipmentsBySearch(params.search);
    }

    @Get('type/:type')
    getByType(@Param() params){
        return this.service.getEquipmentsByType(params.type);
    }

    @Post()
    create(@Body() equipment: Equipment){
        return this.service.createEquipment(equipment);
    }

    @Put()
    update(@Body() equipment : Equipment){
        return this.service.updateEquipment(equipment);
    }

    @Delete(':id')
    delete(@Param() params){
        return this.service.deleteEquipment(params.id);
    }
}
