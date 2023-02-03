import { Controller, Get, Put, Delete } from '@nestjs/common';
import { Post } from '@nestjs/common/decorators';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(
        private readonly userService: UserService
    ) { }


    @Get()
    getAllUsers() {
        return this.userService.getAllUsers()
    }


    @Get(":id")
    getUserInfo() {
        return this.userService.getUserInfo()
    }


    @Post()
    createUser() {
        return this.userService.createUser()
    }


    @Put(":id")
    updateUser() {
        return this.userService.updateUser()
    }


    @Delete(":id")
    deleteUser() {
        return this.userService.deleteUser()
    }

}
