import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CarResponseDto } from 'src/dtos/car.dto';
import { Car, CreateCarInteface } from './car.interface';
import { CarModel, CarSchema } from './car.model';

@Injectable()
export class CarService {
    constructor(@InjectModel('cars') private carModel: Model<CarModel>) { }

    async getAllCars(queryParams?: any) {
        const data = await this.carModel.find({}).exec()
        return data
    }

    async getCarInfo(id: number) {
        const data = await this.carModel.find({ "_id": id }).exec()
        return data?.[0] || {}
    }


    addCar(body: CreateCarInteface) {
        return this.carModel.insertMany([
            {
                ...body,
                updatedAt: new Date(),
                createdAt: new Date()
            }
        ])

    }


    editCar(id: string, body: Car) {
        return (this.carModel.findOneAndUpdate({ '_id': id }, { ...body, updatedAt: new Date() }).exec())
    }

    deleteCar(id: string) {
        return this.carModel.findOneAndDelete({ '_id': id }).exec()
    }


}
