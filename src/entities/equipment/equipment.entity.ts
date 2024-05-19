import { Building } from "../building/building.entity";
import { Frequency } from "../frequency/frequency.entity";
import { WorkOrder } from "../workOrder/work-order.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Equipment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length : 150})
    name: string;

    @Column({length : 70})
    type: string;

    @Column('text')
    description: string;

    @Column({ type: 'date' })
    manufacturingDate: Date;

    @Column({ type: 'date' })
    deliveryDate: Date;

    @Column({ type: 'date' })
    startUpDate: Date;

    @Column()
    isActive : boolean;

    @ManyToOne( ()=> Building, building => building.equipments)
    building: Building;

    @OneToMany( () => Frequency, frequency => frequency.equipment)
    frequencies: Frequency[];

    @OneToMany( ()=> WorkOrder, workorders => workorders.equipment)
    workorders : WorkOrder[];
}
