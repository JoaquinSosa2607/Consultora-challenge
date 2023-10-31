import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Car {
    @PrimaryGeneratedColumn({ name: "id" }) id!: number;

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
    static brand: any;
}
