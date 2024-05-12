import { WoType } from "src/wo-types/wo-type.entity/wo-type.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class IncidentType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 70})
    name: string;

    @Column('text')
    description: string;

    @OneToMany( () => WoType, woType => woType.incidentType)
    woTypes: WoType[];
}
