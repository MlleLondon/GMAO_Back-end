import { User } from "src/entities/user/user.entity";
import { WorkOrder } from "src/entities/workOrder/work-order.entity";
import { Status } from "src/variables/enum";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Intervention {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('date')
    startDate: Date;

    @Column('date')
    endDate: Date;

    @Column()
    durationHours: number;

    @Column({
        type: 'enum',
        enum: Status,
        default: Status.CREATED,
    })
    status : Status;

    @ManyToOne( ()=> WorkOrder, workOrder =>workOrder.interventions)
    workOrder: WorkOrder;

    @ManyToOne( ()=> User, user =>user.interventions)
    user: User;
}
