import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common"
import { Reflector } from "@nestjs/core"
import { InjectModel } from "@nestjs/mongoose"
import { verify } from "jsonwebtoken"
import { Model } from "mongoose"
import { UserModel } from "src/user/user.model"

interface JWTPayload {
    name: string,
    id: number,
    iat: number,
    exp: number
}

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private readonly reaflector: Reflector,
        @InjectModel('users') private userModel: Model<UserModel>
    ) { }
    
    async canActivate(context: ExecutionContext) {
        const roles : Array <any> = this.reaflector.getAllAndOverride('roles', [
            context.getHandler(),
            context.getClass()
        ])

        if (roles?.length) {
            const request = context.switchToHttp().getRequest()
            const token = request?.headers?.authorization?.split("Bearer ")[1]
            try {
                const payload = verify(token, process.env.JSON_TOKEN_KEY) as JWTPayload
                const user = await this.userModel.findById(payload?.id)
                
                if (!user) return false

                if(roles.includes(user.userType)) return true

                return false
            } catch (error) {
                return false
            }
        }
        return true
    }
}