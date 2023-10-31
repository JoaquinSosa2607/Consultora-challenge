import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./data-source";
import routes from "./routes/car.routes";

const app = express();
app.use(express.json());
app.use(routes);

AppDataSource.initialize()
    .then(() => {
        app.listen(3000);
        console.log("Connection ready");
        console.log("Listening on 3000");
    })
    .catch((err) => {
        console.error(err);
    });
