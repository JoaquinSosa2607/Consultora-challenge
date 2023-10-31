import { Router } from "express";
import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { Car } from "../entity/Car";

const router = Router();

router.post("/cars", async (req: Request, res: Response) => {
    const carRepository = getRepository(Car);
    const { brand, model, year, price } = req.body;
    const car = new Car();
    car.brand = brand;
    car.model = model;
    car.year = year;
    car.price = price;
    const newCar = await carRepository.save(car);
    res.json(newCar);
});

router.get("/cars/:id", async (req: Request, res: Response) => {
    const carRepository = getRepository(Car);
    const car = await carRepository.findOne(req.params.id);
    res.json(car);
});

router.put("/cars/:id", async (req: Request, res: Response) => {
    const carRepository = getRepository(Car);
    const car = await carRepository.findOne(req.params.id);
    if (car) {
        const { brand, model, year, price } = req.body;
        car.brand = brand;
        car.model = model;
        car.year = year;
        car.price = price;
        const updatedCar = await carRepository.save(car);
        res.json(updatedCar);
    } else {
        res.status(404).json({ message: "Car not found" });
    }
});

export default router;
