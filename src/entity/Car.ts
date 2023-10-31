import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Car {
    @PrimaryColumn()
    id: number;
    
    @Column()
    model: string;

    @Column()
    brand: string;

    @Column()
    year: number;

    @Column()
    price: number;

    @Column()
    stock: number;
}
