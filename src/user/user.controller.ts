import { Controller, Get, Put, Delete, UnauthorizedException } from '@nestjs/common';
import { Body, Param, Post, Query } from '@nestjs/common/decorators';
import { ObjectId, StringSchemaDefinition } from 'mongoose';
import { AuthService } from './auth/auth.service';
import { SignupDto } from './auth/dtos/auth.dto';
import { UserType, User } from './user.interface';
import { UserService } from './user.service';
import { UserInfo } from './decorators/userInfo.decorator';

@Controller('user')
export class UserController {

    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService
    ) { }


    @Get()
    getAllUsers(
        @UserInfo() user: User
    ) {
        return this.userService.getAllUsers(user)
    }


    @Get(":id")
    getUserInfo(
        @Param('id') id: ObjectId, @UserInfo() user: User
    ) {
        return this.userService.getUserInfo(id, user)
    }


    @Post()
    createUser(
        @Body() body: SignupDto,
        @Query('type') type: string,
        @UserInfo() user: User
    ) {
        let userType = UserType.USER

        if (user.userType != UserType.USER) {

            if (type == 'admin') userType = UserType.ADMIN

            if (type == 'superadmin') userType = UserType.SUPERADMIN
        }

        return this.authService.signup(body, userType)
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
