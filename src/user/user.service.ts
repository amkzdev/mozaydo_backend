import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isObjectIdOrHexString, Model, ObjectId } from 'mongoose';
import { User, UserType } from './user.interface';
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
        if (!isObjectIdOrHexString(id))
            throw new NotFoundException

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

    updateUser() {
        return 'Update Info'

    }

    deleteUser() {
        return 'Delete Info'

    }

}
