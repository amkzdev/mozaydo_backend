import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CarResponseDto } from 'src/dtos/car.dto';
import { Car, CreateCarInteface } from './car.interface';
import { CarModel, CarSchema } from './car.model';

@Injectable()
export class CarService {
    constructor(@InjectModel('cars') private carModel: Model<CarModel>) { }

    async getAllCars(filter?: Car | { [key: string]: any }): Promise<CarResponseDto[]> {
        const cars = await this.carModel.find(filter).lean()
        if(!cars.length) throw new NotFoundException
        return cars.map(item => new CarResponseDto(item))
    }

    async getCarInfo(id: number): Promise<CarResponseDto> {
        return await this.carModel.findOne({ "id": id }).lean()

    }


    async addCar(body: CreateCarInteface): Promise<any | any> {

        const isCarExist = await this.carModel.exists({ 'partyNo': body.partyNo },)

        if (isCarExist) return Promise.resolve({ message: 'Car Already Exist', status: 203 })

        const item = await this.carModel.create(
            {
                ...body,
                updatedAt: new Date(),
                createdAt: new Date()
            }
        )
        return item
    }


    async editCar(id: string, body: Car) {
        return await this.carModel.findOneAndUpdate({ '_id': id }, { ...body, updatedAt: new Date() }, { new: true }).exec()
    }

    async deleteCar(id: string) {
        return await this.carModel.findByIdAndDelete(id, { returnOriginal: true }).exec()
    }


}
