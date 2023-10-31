import { AppDataSource } from "../data-source";
import { Car } from "../entity/car.entity";

export class CarService {
    repository = AppDataSource.getRepository(Car);

    async findById(id: number) {
        return await this.repository.findOne({ where: { id: id } });
    }

    async saveCarOnDb(car: Car): Promise<Car> {
        const result: Car = await this.repository.save(car);

        return result;
    }
}
