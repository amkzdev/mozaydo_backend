import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
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
        @Param('id', ParseIntPipe) id: number
    ) {
        return this.carService.getCarInfo(id)
    }

    @Post()
    addNewCar(
        @Body() body: createCarDto
    ) {
        return this.carService.addCar(body)
    }

    @Put(":id")
    editCar(
        @Body() body: createCarDto,
        @Param('id', ParseIntPipe) id: number
    ) {
        return this.carService.editCar(id, body)
    }
}



