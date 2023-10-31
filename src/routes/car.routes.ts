import { Router } from "express";
import { Request, Response } from "express";
import { Car } from "../entity/car.entity";
import { AppDataSource } from "../data-source";
import { CarService } from "../services/car.service";
import { CarController } from "../controllers/car.controller";
import { CarRequest } from "../models/car.request";

const router = Router();
const controller = new CarController();
const service = new CarService();
const repository = AppDataSource.getRepository(Car);

router.post("/car", async (req: Request, res: Response) => {
    const { brand, model, year, price, stock } = req.body;
    const request: CarRequest = new CarRequest(
        brand,
        model,
        year,
        price,
        stock
    );
    await controller.postCar(res, request);
});

router.get("/test", async (req: Request, res: Response) => {
    res.status(200).send({ Hola: "Buenas tardes" });
});

router.get("/car/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    const car = await service.findById(id);
    res.status(200).send(car);
});

router.put("/car/:id", async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const { brand, model, year, price, stock } = req.body;
        const request: CarRequest = new CarRequest(
            brand,
            model,
            year,
            price,
            stock
        );
        await controller.UpdateCar(res, request, id);
    } catch (error) {
        res.status(404).json({ message: "Car not found" });
    }
});

export default router;
