import { Organization } from "src/organizations/organization.entity/organization.entity";
import { User } from "src/users/user.entity/user.entity";
import { Status } from "src/variables/enum";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Building {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length : 150})
    name : string;

    @Column({length : 70})
    type : string;

    @Column({
        type: 'enum',
        enum: Status,
        default: Status.ACTIVE,
    })
    status : Status;

    @OneToMany( ()=> User, user => user.building)
    users: User[];

    @ManyToOne( ()=> Organization, organization => organization.buildings)
    organization : Organization
}
