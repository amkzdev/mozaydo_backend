import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule } from './car/car.module';

@Module({
  imports: [CarModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/mozaydo')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
