import { Equipment } from "../equipment/equipment.entity";
import { Organization } from "../organization/organization.entity";
import { User } from "../user/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Building {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length : 150})
    name : string;

    @Column({length : 70})
    type : string;

    @Column()
    isActive : boolean;

    @OneToMany( ()=> User, user => user.building)
    users: User[];

    @ManyToOne( ()=> Organization, organization => organization.buildings)
    organization : Organization

    @OneToMany( ()=> Equipment, equipment => equipment.building)
    equipments: Equipment[];

}
