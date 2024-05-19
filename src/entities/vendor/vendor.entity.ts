import { Part } from "../part/part.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vendor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 70})
    name: string;

    @Column({length: 150, unique: true})
    email: string;

    @Column({length: 15, unique: true})
    phoneNumber: string;

    @Column({length: 10})
    zipCode: string;

    @Column({length: 150})
    city: string;

    @Column({length: 150})
    address: string;

    @Column()
    isActive : boolean;

    @ManyToMany( ()=> Part, part => part.vendors)
    @JoinTable({ name: "stock" })
    parts: Part[]
}
