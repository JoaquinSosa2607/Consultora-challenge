import "reflect-metadata";
import { DataSource } from "typeorm";
import { Car } from "./entity/car.entity";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "concesionaria_db",
    synchronize: true,
    logging: false,
    entities: [Car],
    migrations: [],
    subscribers: [],
});


