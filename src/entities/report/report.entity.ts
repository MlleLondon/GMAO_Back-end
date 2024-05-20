import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { WorkOrder } from "../workOrder/work-order.entity";

@Entity()
export class Report{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 150, unique: true})
    title: string;

    @Column('date')
    creationDate: Date;

    @Column('text')
    refusedReason: string;

    @Column()
    isSigned: boolean;

    @Column()
    isRefused: boolean;

    @ManyToOne( ()=> WorkOrder, workOrder => workOrder.reports)
    workOrder: WorkOrder;
}
