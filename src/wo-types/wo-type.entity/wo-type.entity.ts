import { Frequency } from "src/frequencies/frequency.entity/frequency.entity";
import { IncidentType } from "src/incident-types/incident-type.entity/incident-type.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class WoType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 70, unique: true})
    name: string;

    @Column({length: 70, unique: true})
    label: string;

    @ManyToOne( () => IncidentType, incidentType => incidentType.woTypes)
    incidentType: IncidentType;

    @OneToMany(() => Frequency, frequency => frequency.woType)
    frequencies: Frequency[];
}
