import { Injectable } from '@nestjs/common';

@Injectable()
export class CarService {

    getAllCars(queryParams?: any) {
        return [
            { id: 1, name: "پیکان" },
            { id: 2, name: "سمند" },
        ]
    }

    getCarInfo(id: string) {
        return ({ id, car: 'ماشین' })
    }



}
