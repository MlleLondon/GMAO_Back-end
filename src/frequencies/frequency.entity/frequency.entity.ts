import { Equipment } from "src/equipments/equipment.entity/equipment.entity";
import { WoType } from "src/wo-types/wo-type.entity/wo-type.entity";
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
