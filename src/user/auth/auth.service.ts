import { Injectable, ConflictException, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from '../user.model';
import { SigninParams, SignupParams } from './auth.interface';
import { compare, hash } from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { UserType } from '../user.interface';
@Injectable()
export class AuthService {

    constructor(@InjectModel('users') private userModel: Model<UserModel>) { }

    async signup({ phone, password, email, name }: SignupParams, userType?: UserType) {
        const userExist = await this.userModel.findOne({ $or: [{ 'phone': phone }, { 'email': email }] }).exec()
        if (userExist) {
            throw new ConflictException()
        }

        const hashedPassword = await hash(password, 10)

        const userTypeOfUser = userType ? userType : UserType.USER

        const user = await this.userModel.create({
            email,
            password: hashedPassword,
            phone,
            userType: userTypeOfUser,
            ...(userTypeOfUser == 'user'
                ? ({
                    activePlanId: 0,
                    planDeadline: new Date()

                })
                : ({
                    activePlanId: 0,
                    planDeadline: new Date('2030-12-12T00:00:00')
                })
            )
        })

        return ({ token: await this.generateJWT(name, user.id, user.userType), userType: user.userType })

    }


    async signin({ phone, password }: SigninParams) {
        const user = await this.userModel.findOne({ 'phone': phone }).exec()

        if (!user) {
            throw new HttpException('Invalid Credentails', 400)
        }


        const hashedPassword = user.password

        const isValidPassword = await compare(password, hashedPassword)

        if (!isValidPassword) {
            throw new HttpException('Invalid Credentails', 400)
        }

        return { token: await this.generateJWT(user.name, user.id, user.userType), userType: user.userType }

    }


    private async generateJWT(name: string, id: number, userType: UserType) {
        return jwt.sign({
            name,
            id,
            userType
        }, process.env.JSON_TOKEN_KEY, {
            expiresIn: 300
        })
    }
}
