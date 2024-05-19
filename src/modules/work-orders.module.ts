import { Module } from '@nestjs/common';
import { WorkOrdersService } from 'src/services/workOrders/work-orders.service';
import { WorkOrdersController } from 'src/controllers/workOrders/work-orders.controller';
import { WorkOrder } from 'src/entities/workOrder/work-order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports : [TypeOrmModule.forFeature([WorkOrder])],
  providers: [WorkOrdersService],
  controllers: [WorkOrdersController]
})
export class WorkOrdersModule {}
