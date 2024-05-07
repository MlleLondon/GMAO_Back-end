import { Role } from "src/roles/role.entity/role.entity";
import { Status } from "src/variables/enum";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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
    @Column({
        type: 'enum',
        enum: Status,
        default: Status.ACTIVE,
    })
    status : Status;

    @ManyToOne( ()=> Role, role =>role.users)
    role: Role;

}
