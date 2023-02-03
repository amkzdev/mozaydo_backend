import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Plan } from './plan.inteface';
import { PlanModel } from './plan.model';

@Injectable()
export class PlanService {

    constructor(@InjectModel('cars') private planDB: Model<PlanModel>) { }


    async getAllPlans() {
        return this.planDB.find({}).exec()
    }

    async getPlanInfo(id: string) {
        this.planDB.findById(id).exec()
    }


    async createPlan(body: Plan) {
        this.planDB.create({
            ...body,
            updatedAt: new Date(),
            createdAt: new Date()
        })
    }


    async updatePlan(id: string, body: Plan) {
        const plan = this.planDB.findByIdAndUpdate(id, { ...body, updatedAt: new Date })
        return plan
    }


}
