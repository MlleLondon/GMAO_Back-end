import { TableAccess } from "src/variables/enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class History {

    @PrimaryGeneratedColumn()
    id : number;

    @Column({
        type: 'enum',
        enum: TableAccess,
    })
    nameTable : TableAccess;

    @Column()
    recordId : number;

    @Column()
    idUser : number;

    @Column()
    updatedAt : Date;

    @Column('text')
    oldData: string;

    @Column('text')
    newData: string;
}
