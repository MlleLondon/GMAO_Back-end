import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkOrder } from 'src/entities/workOrder/work-order.entity';
import { Like, Repository } from 'typeorm';
import { Priority, Status } from 'src/variables/enum';

@Injectable()
export class WorkOrdersService {

    constructor(@InjectRepository(WorkOrder) private woRepository: Repository<WorkOrder>) {}

    async getWorkOrders(): Promise<WorkOrder[]> {
        return await this.woRepository.find({
            order: {creationDate: 'ASC'},
        });
    }

    async getWorkOrdersByPriority(_priority : Priority): Promise<WorkOrder[]> {
        return await this.woRepository.find({
            where: [
                { priority: _priority }
            ],
            order: { creationDate: 'ASC' },
        });
    }

    async getWorkOrdersByStatus(_status : Status): Promise<WorkOrder[]> {
        return await this.woRepository.find({
            where: [
                { status: _status }
            ],
            order: { creationDate: 'ASC' },
        });
    }

    async getWorkOrdersBySearch(_search : string): Promise<WorkOrder[]> {
        return await this.woRepository.find({
            where: [
                { name: Like(`%${_search}%`) }
            ],
            order: { creationDate: 'ASC' },
        });
    }

    async getWorkOrderById(_id : number): Promise<WorkOrder> {
        return await this.woRepository.findOneBy({id: _id});
    }

    async createWorkOrder(workOrder: WorkOrder){
        return await this.woRepository.save(workOrder);
    }

    async updateWorkOrder(workOrder: WorkOrder){
        return await this.woRepository.save(workOrder);
    }

    async deleteWorkOrder(workOrder: WorkOrder){
        return await this.woRepository.delete(workOrder);
    }
}
