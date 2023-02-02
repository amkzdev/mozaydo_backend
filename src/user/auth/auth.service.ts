import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from '../user.model';
import { SignupParams } from './auth.interface';
import { hash } from 'bcryptjs'

@Injectable()
export class AuthService {

    constructor(@InjectModel('users') private userModel: Model<UserModel>) { }

    async signup({ phone, password, email }: SignupParams) {
        const userExist = await this.userModel.findOne({ 'phone': phone }).exec()
        if (userExist) {
            throw new ConflictException()
        }

        const hashedPassword = await hash(password, 10)

        return await this.userModel.create({
            email,
            password: hashedPassword,
            phone
        })
    }
}
