import { Equipment } from "../equipment/equipment.entity";
import { WoType } from "../woType/wo-type.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Frequency {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Equipment, equipment => equipment.frequencies)
    equipment: Equipment;

    @ManyToOne(() => WoType, woType => woType.frequencies)
    woType: WoType;

    @Column('date')
    maintenanceDate: Date;

    @Column()
    deadlineMonth: number;
}
