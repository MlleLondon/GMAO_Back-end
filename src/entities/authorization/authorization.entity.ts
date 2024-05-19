import { Role } from "../role/role.entity";
import { TableAccess, TableTypeAccess } from "src/variables/enum";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Authorization {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'enum',
        enum: TableTypeAccess,
        default : TableTypeAccess.READ,
    })
    type : TableTypeAccess;

    @Column({
        type: 'enum',
        enum: TableAccess,
    })
    tableAccess : TableAccess;

    @ManyToMany( () => Role, role => role.authorizations)
    roles : Role[]
}
