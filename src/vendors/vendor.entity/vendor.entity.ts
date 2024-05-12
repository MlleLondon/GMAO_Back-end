import { Part } from "src/parts/part.entity/part.entity";
import { Purchase } from "src/purchases/purchase.entity/purchase.entity";
import { Status } from "src/variables/enum";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @Column({
        type: 'enum',
        enum: Status,
        default: Status.ACTIVE,
    })
    status : Status;

    @OneToMany( ()=> Purchase, purchase => purchase.vendor)
    purchases: Purchase[]

    @OneToMany( ()=> Part, part => part.vendor)
    parts: Part[]
}
