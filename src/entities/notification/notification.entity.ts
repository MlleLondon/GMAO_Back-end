import { TableAccess, TableTypeAccess } from "src/variables/enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Notification {
    @PrimaryGeneratedColumn()
    id: number;

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
    notifiedAt : Date;

    @Column({
        type: 'enum',
        enum: TableTypeAccess,
    })
    type : TableTypeAccess;

    @Column({ default: true })
    readNotification: boolean;
}
