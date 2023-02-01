import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CarService } from './car.service'
import { createCarDto } from '../dtos/car.dto'

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
        @Param('id', ParseIntPipe) id: string
    ) {
        return this.carService.getCarInfo(id)
    }

    @Post()
    addNewCar(
        @Body() body: createCarDto
    ) {
        return body
    }
}



