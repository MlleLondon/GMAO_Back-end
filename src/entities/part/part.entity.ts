import { Vendor } from "../vendor/vendor.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Part {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 70})
    name: string;

    @Column({length: 70, unique: true})
    reference: string;

    @Column('date')
    lastPurchase: Date;

    @Column('text')
    description: string;

    @Column()
    minInventoryLevel: number;

    @Column()
    totalParts: number;

    @Column()
    isActive : boolean;

    @ManyToMany( ()=> Vendor, vendor => vendor.parts)
    vendors: Vendor[];
}
