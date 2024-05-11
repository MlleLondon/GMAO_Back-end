import { Building } from "src/buildings/building.entity/building.entity";
import { Status } from "src/variables/enum";
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

    @Column({
        type: 'enum',
        enum: Status,
        default: Status.ACTIVE,
    })
    status : Status;

    @OneToMany( ()=>Building, building => building.organization)
    buildings: Building[];
}
