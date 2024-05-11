import { Status } from "src/variables/enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Part {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 70})
    name: string;

    @Column({length: 70, unique: true})
    reference: string;

    @Column('date')
    lastPurchase: Date;

    @Column('text')
    description: string;

    @Column()
    minInventoryLevel: number;

    @Column()
    totalParts: number;

    @Column({
        type: 'enum',
        enum: Status,
        default: Status.ACTIVE,
    })
    status : Status;
}
