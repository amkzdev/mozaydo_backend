import { Body, Controller, Delete, Get, HttpCode, Param, Query, Post, Put } from '@nestjs/common';
import { CarService } from './car.service'
import { CarResponseDto, createCarDto } from '../dtos/car.dto'

@Controller('car')
export class CarController {

    constructor(
        private readonly carService: CarService
    ) { }


    @Get()
    getAllCars(
        @Query('title') title?: string,
        @Query('model') model?: number,
        @Query('partyNo') partyNo?: number,
        @Query('minPrice') minPrice?: string,
        @Query('maxPrice') maxPrice?: string,
    ): Promise<CarResponseDto[]> {

        const price = minPrice || maxPrice ? {
            ...(minPrice && { $gte: parseFloat(minPrice) }),
            ...(maxPrice && { $lte: parseFloat(maxPrice) })
        } : undefined

        const filters = {
            ...(title && { title }),
            ...(partyNo && { partyNo }),
            ...(model && { model }),
            ...(price && { price })
        }
        return this.carService.getAllCars(filters)
    }

    @Get(':id')
    getCarInfo(
        @Param('id') id: number
    ) {
        return this.carService.getCarInfo(id)
    }

    @HttpCode(201)
    @Post()
    addNewCar(
        @Body() body: createCarDto
    ) {
        return this.carService.addCar(body)
    }

    @Put(":id")
    editCar(
        @Body() body: createCarDto,
        @Param('id') id: string
    ) {

        return this.carService.editCar(id, body)

    }

    @HttpCode(204)
    @Delete(':id')
    deleteCar(
        @Param('id') id: string

    ) {
        return this.carService.deleteCar(id)
    }
}



