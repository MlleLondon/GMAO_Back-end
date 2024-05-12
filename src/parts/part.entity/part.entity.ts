import { Purchase } from "src/purchases/purchase.entity/purchase.entity";
import { Status } from "src/variables/enum";
import { Vendor } from "src/vendors/vendor.entity/vendor.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @Column({
        type: 'enum',
        enum: Status,
        default: Status.ACTIVE,
    })
    status : Status;

    @OneToMany( ()=> Purchase, purchase => purchase.part)
    purchases: Purchase[]

    @ManyToOne( ()=> Vendor, vendor => vendor.parts)
    vendor: Vendor;
}
