import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class History {

    @PrimaryGeneratedColumn()
    id : number;

    @Column({length : 70})
    nameTable : string;

    @Column()
    idTable : number;

    @Column()
    idUser : number;

    @Column()
    updatedAt : Date;

    @Column('text')
    oldDate: string;

    @Column('text')
    newData: string;
}
