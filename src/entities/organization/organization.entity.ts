import { Building } from "../building/building.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Organization {
    @PrimaryGeneratedColumn()
    id: number;


    @Column({length : 150, unique : true})
    name : string;

    @Column({length : 10})
    zipCode : string;

    @Column({length : 110})
    city : string;

    @Column({length : 150})
    address : string;

    @Column({length : 15})
    phoneNumber : string;

    @Column()
    isActive : boolean;

    @OneToMany( ()=>Building, building => building.organization)
    buildings: Building[];
}
