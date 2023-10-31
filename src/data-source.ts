import "reflect-metadata";
import { DataSource } from "typeorm";
import { Car } from "./entity/Car";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "SlytherinRules2607",
    database: "concesionaria_db",
    synchronize: true,
    logging: false,
    entities: [Car],
    migrations: [],
    subscribers: [],
});


