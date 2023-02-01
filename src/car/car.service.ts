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


    async addCar(body: CreateCarInteface) {
        return await this.carModel.create([
            {
                ...body,
                updatedAt: new Date(),
                createdAt: new Date()
            }
        ])

    }


    async editCar(id: string, body: Car) {
        return await this.carModel.findOneAndUpdate({ '_id': id }, { ...body, updatedAt: new Date() }, { new: true }).exec()
    }

    async deleteCar(id: string) {
        return await this.carModel.findByIdAndDelete(id, { returnOriginal: true }).exec()
    }


}
