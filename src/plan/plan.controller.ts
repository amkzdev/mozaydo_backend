import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('plan')
export class PlanController {

    @Get()
    getAllPlans() {
        return []
    }


    @Get(":id")
    getPlan() {
        return []
    }

    @Post()
    createPlan() {
        return true
    }


    @Put(":id")
    editPlan() {

    }


    @Delete("id")
    deletePlan() {

    }


}
