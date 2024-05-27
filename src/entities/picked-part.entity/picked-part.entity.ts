import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Part } from "../part/part.entity";
import { Intervention } from "../interventions/intervention.entity/intervention.entity";

@Entity()
export class PickedPart{
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    descriptionUsage: string;

    @Column()
    quantity: number;

    @ManyToOne(() => Part, part => part.pickedParts)
    part: Part;

    @ManyToOne(() => Intervention, intervention => intervention.pickedParts)
    intervention: Intervention;
}
