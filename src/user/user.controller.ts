import { Controller, Get, Put, Delete, UseGuards } from '@nestjs/common';
import { Body, Param, Post, Query } from '@nestjs/common/decorators';
import { ObjectId, StringSchemaDefinition } from 'mongoose';
import { AuthService } from './auth/auth.service';
import { SignupDto } from './auth/dtos/auth.dto';
import { UserType, User } from './user.interface';
import { UserService } from './user.service';
import { UserInfo } from './decorators/userInfo.decorator';
import { UpdateUserDto } from './dtos/user.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { Roles } from 'src/decorators/roles.decorator';

@Controller('user')
export class UserController {

    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService
    ) { }

    @Roles(UserType.ADMIN, UserType.SUPERADMIN)
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
    updateUser(
        @Body() body: UpdateUserDto,
        @Param('id') id: ObjectId,
        @UserInfo() user: User

    ) {

        return this.userService.updateUser(id, body, user)
    }

    @Roles(UserType.ADMIN, UserType.SUPERADMIN)
    @Delete(":id")
    deleteUser(
        @Param('id') id: ObjectId,
        @UserInfo() user: User
    ) {
        return this.userService.deleteUser(id, user)
    }

}
