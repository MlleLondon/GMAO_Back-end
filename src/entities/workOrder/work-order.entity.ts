import { Equipment } from "../equipment/equipment.entity";
import { User } from "../user/user.entity";
import { Priority, Status } from "src/variables/enum";
import { WoType } from "../woType/wo-type.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class WorkOrder {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 70, unique: true})
    name: string;

    @Column('text')
    requestDescription: string;

    @Column({
        type: 'enum',
        enum: Priority,
        default: Priority.NOT_URGENT,
    })
    priority : Priority;

    @Column('date')
    creationDate: Date;

    @Column('date')
    endDate: Date;

    @Column('text')
    conclusion: string;

    @Column()
    totalInterventionTime: number;

    @Column({
        type: 'enum',
        enum: Status,
        default: Status.CREATED,
    })
    status : Status;

    @ManyToOne( ()=> WoType, woType =>woType.workorders)
    woType: WoType;

    @ManyToOne( ()=> User, user =>user.workorders)
    user: User;

    @ManyToOne( ()=> Equipment, equipment =>equipment.workorders)
    equipment: Equipment;
}
