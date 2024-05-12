import { Authorization } from "src/authorizations/authorization.entity/authorization.entity";
import { User } from "src/users/user.entity/user.entity";
import { Level } from "src/variables/enum";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Role{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'enum',
        enum: Level,
        default: Level.TECHNICIAN,
    })
    level : Level;

    @Column({length : 70, unique: true})
    name: string;

    @OneToMany( ()=>User, user => user.role)
    users: User[];

    @ManyToMany( () => Authorization, authorization => authorization.roles)
    @JoinTable({ name: "allow" })
    authorizations : Authorization[]
}
