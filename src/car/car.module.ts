import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CarSchema } from './car.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'cars', schema: CarSchema }])],
  controllers: [CarController],
  providers: [CarService]
})
export class CarModule { }
