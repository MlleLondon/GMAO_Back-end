import { Status } from "src/variables/enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column({
        type: 'enum',
        enum: Status,
        default: Status.ACTIVE,
    })
    status : Status;
}
