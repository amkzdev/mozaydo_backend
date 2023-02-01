import { Controller, Get, Param } from '@nestjs/common';
import { CarService } from './car.service'

@Controller('car')
export class CarController {

    constructor(
        private readonly carService: CarService
    ) { }


    @Get()
    getAllCars() {
        return this.carService.getAllCars()
    }

    @Get(':id')
    getCarInfo(
        @Param('id') id: string
    ) {
        return this.carService.getCarInfo(id)
    }


}
