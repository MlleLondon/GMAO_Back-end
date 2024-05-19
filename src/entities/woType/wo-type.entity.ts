import { Frequency } from "../frequency/frequency.entity";
import { WorkOrder } from "../workOrder/work-order.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class WoType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 70, unique: true})
    name: string;

    @Column({length: 70, unique: true})
    label: string;

    @OneToMany(() => Frequency, frequency => frequency.woType)
    frequencies: Frequency[];

    @OneToMany( ()=> WorkOrder, workorders => workorders.woType)
    workorders : WorkOrder[];
}
