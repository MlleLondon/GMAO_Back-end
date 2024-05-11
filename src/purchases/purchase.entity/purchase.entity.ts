import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Purchase {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('date')
    datePurchase: Date;

    @Column({ type: 'decimal', precision: 15, scale: 2, default: '0.00' })
    unitPrice: number;
}
