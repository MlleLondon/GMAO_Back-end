import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { WorkOrdersService } from 'src/services/workOrders/work-orders.service';
import { WorkOrder } from 'src/entities/workOrder/work-order.entity';

@Controller('work-orders')
export class WorkOrdersController {

    constructor(private service: WorkOrdersService){}

    @Get()
    getAll(@Param() params){
        return this.service.getWorkOrders();
    }

    @Get(':id')
    getById(@Param() params){
        return this.service.getWorkOrderById(params.id);
    }

    @Get('search/:search')
    getBySearch(@Param() params){
        return this.service.getWorkOrdersBySearch(params.search);
    }

    @Get('prio/:priority')
    getByPriority(@Param() params){
        return this.service.getWorkOrdersByPriority(params.priority);
    }

    @Get('status/:status')
    getByStatus(@Param() params){
        return this.service.getWorkOrdersByStatus(params.status);
    }

    @Post()
    create(@Body() wo: WorkOrder){
        return this.service.createWorkOrder(wo);
    }

    @Put()
    update(@Body() wo : WorkOrder){
        return this.service.updateWorkOrder(wo);
    }

    @Delete(':id')
    delete(@Param() params){
        return this.service.deleteWorkOrder(params.id);
    }
}
