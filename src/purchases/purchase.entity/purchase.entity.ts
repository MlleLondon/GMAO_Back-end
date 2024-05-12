import { Part } from "src/parts/part.entity/part.entity";
import { Vendor } from "src/vendors/vendor.entity/vendor.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Purchase {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('date')
    datePurchase: Date;

    @Column({ type: 'decimal', precision: 15, scale: 2, default: '0.00' })
    unitPrice: number;

    @Column()
    quantity: number;

    @Column({ type: 'decimal', precision: 15, scale: 2, default: '0.00' })
    tax: number;

    @Column({ type: 'decimal', precision: 15, scale: 2, default: '0.00' })
    total: number;

    @ManyToOne( ()=> Part, part => part.purchases)
    part: Part;

    @ManyToOne( ()=> Vendor, vendor => vendor.purchases)
    vendor: Vendor;
}
