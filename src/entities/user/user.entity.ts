import { Building } from "../building/building.entity";
import { Role } from "../role/role.entity";
import { WorkOrder } from "../workOrder/work-order.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length : 70})
    name: string;

    @Column({length : 70})
    firstname: string;

    @Column({length : 150, unique: true})
    email: string;

    @Column({length : 150})
    password: string;

    @Column({length : 15})
    phoneNumber: string;

    //L'attribut status est un enum se retrouvant dans plusieurs entités, les valeurs possibles ont été
    //mise dans variables/enum.ts
    @Column()
    isActive : boolean;

    @ManyToOne( ()=> Role, role =>role.users)
    role: Role;

    @ManyToOne( ()=> Building, building => building.users)
    building : Building;

    @OneToMany( ()=> WorkOrder, workorders => workorders.user)
    workorders : WorkOrder[];

}
