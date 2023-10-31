import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./data-source";

const app = express();
app.use(express.json());

AppDataSource.initialize()
    .then(() => {
        console.log("Connection ready");
    })
    .catch((err) => {
        console.error(err);
    }); 
