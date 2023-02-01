import { Injectable } from '@nestjs/common';
import { Car, CreateCarInteface } from './car.interface';

@Injectable()
export class CarService {

    getAllCars(queryParams?: any) {
        return [
            { id: 1, name: "پیکان" },
            { id: 2, name: "سمند" },
        ]
    }

    getCarInfo(id: number) {
        return ({ id, car: 'ماشین' })
    }


    addCar(body: CreateCarInteface) {
        return body
    }


    editCar(id: number, body: Car) {
        return { id, ...body }
    }

    deleteCar(id: number) {
        return `${id} Deleted`
    }


}
