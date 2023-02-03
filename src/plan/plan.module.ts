import { Module } from '@nestjs/common';
import { PlanService } from './plan.service';
import { PlanController } from './plan.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PlanSchema } from './plan.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'plans', schema: PlanSchema }])],
  providers: [PlanService],
  controllers: [PlanController]
})
export class PlanModule { }
