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

    @Column({
        type: 'enum',
        enum: Status,
        default: Status.ACTIVE,
    })
    status : Status;
}
