import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule } from './car/car.module';
import { UserInterceptor } from './user/interceptors/user.interceptor';
import { UserModule } from './user/user.module';
import { PlanModule } from './plan/plan.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/mozaydo'),
    ConfigModule.forRoot(),
    CarModule,
    UserModule,
    PlanModule
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_INTERCEPTOR,
    useClass: UserInterceptor
  }],
})
export class AppModule { }
