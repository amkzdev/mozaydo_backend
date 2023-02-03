import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { hash } from 'bcryptjs';
import { Model, ObjectId } from 'mongoose';
import { requestUserType, User, UserType } from './user.interface';
import { UserModel } from './user.model';

@Injectable()
export class UserService {

    constructor(@InjectModel('users') private userModel: Model<UserModel>) { }

    async getAllUsers(user: User) {
        if (user.userType == UserType.SUPERADMIN || user.userType == UserType.ADMIN)
            return await this.userModel.find({})
        else
            throw new UnauthorizedException
    }

    async getUserInfo(id: ObjectId, user: User) {

        const targetUser = await this.userModel.findById(id).exec()

        if (targetUser.id != id && user.userType == UserType.USER)
            throw new UnauthorizedException

        return await this.userModel.findById(id)
    }

    createUser(body: User) {

        // return this.userModel.create({
        //     ...body,
        //     updatedAt: new Date(),
        //     createdAt: new Date()
        // })

    }

    async updateUser(id: ObjectId, body: requestUserType, user: User) {

        if (!this.userModel.exists({ id: id }) || !user)
            throw new UnauthorizedException

        if (this.isUserIsNotCreater(id, user))
            throw new UnauthorizedException


        const updatedItem = await this.userModel.findByIdAndUpdate(id,
            {
                password: await hash(body.password, 10),
                name: body.name,
                email: body.email,
                ...(user.userType != UserType.USER && ({
                    planDeadline: body.planDeadline,
                    activePlanId: body.activePlanId
                }))
            }, { new: true })

        return updatedItem


    }

    async deleteUser(id: ObjectId | string, user: User) {

        if (user.userType == UserType.USER || user.userType == UserType.ADMIN)
            throw new UnauthorizedException

        return await this.userModel.findByIdAndDelete(id)

    }

    isUserIsNotCreater(id: ObjectId | string, user: User) {
        return (user.id != id && user.userType == UserType.USER)
    }

}
