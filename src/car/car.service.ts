import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car, CreateCarInteface } from './car.interface';
import { CarModel, CarSchema } from './car.model';

@Injectable()
export class CarService {
    constructor(@InjectModel('cars') private carModel: Model<CarModel>) { }

    getAllCars(queryParams?: any) {
        return this.carModel.find({})
    }

    getCarInfo(id: number) {
        return this.carModel.find({ "_id": id })
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
        return this.carModel.updateOne({ '_id': id }, { ...body, updatedAt: new Date() })
    }

    deleteCar(id: string) {
        return this.carModel.deleteOne({ '_id': id })
    }


}
