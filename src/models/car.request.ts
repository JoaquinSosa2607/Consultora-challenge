export class CarRequest {
    brand?: string;
    model?: string;
    year?: number;
    price?: number;
    stock?: number;

    constructor(
        brand?: string,
        model?: string,
        year?: number,
        price?: number,
        stock?: number
    ) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.price = price;
        this.stock = stock;
    }
}
