import { Car } from "../entity/car.entity";
import { CarRequest } from "../models/car.request";
import { HttpResponse } from "../models/http.response";
import { CarService } from "../services/car.service";
import { Response } from "express";

export class CarController {
    service: CarService = new CarService();

    async UpdateCar(
        res: Response,
        request: CarRequest,
        id?: number
    ): Promise<HttpResponse> {
        try {
            const car: Car = await this.service.findById(id!);
            car.brand = request.brand ?? car.brand;
            car.model = request.model ?? car.model;
            car.year = request.year ?? car.year;
            car.price = request.price ?? car.price;
            //Agregué esto en caso de que se venda o llegue una nueva unidad //
            car.stock = request.stock ?? car.stock;
            const result = await this.service.saveCarOnDb(car);
            return new HttpResponse().Ok(res, result);
        } catch (error) {
            console.error(error);
            return new HttpResponse().NotFound(res, error.sqlMessage);
        }
    }

    async postCar(res: Response, request: CarRequest): Promise<HttpResponse> {
        try {
            const car = new Car();
            car.brand = request.brand;
            car.model = request.model;
            car.year = request.year;
            car.price = request.price;
            //Agregué esto en caso de que se venda o llegue una nueva unidad //
            car.stock = request.stock;
            const result = await this.service.saveCarOnDb(car);
            return new HttpResponse().Ok(res, result);
        } catch (error) {
            console.error(error);
            return new HttpResponse().NotFound(res, error.sqlMessage);
        }
    }
}
