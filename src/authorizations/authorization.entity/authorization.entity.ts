import { Role } from "src/roles/role.entity/role.entity";
import { TableAccess } from "src/variables/enum";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Authorization {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length : 70})
    type : string;

    @Column({
        type: 'enum',
        enum: TableAccess,
    })
    tableAccess : TableAccess;

    @ManyToMany( () => Role, role => role.authorizations)
    roles : Role[]
}
