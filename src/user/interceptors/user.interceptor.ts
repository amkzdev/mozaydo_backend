import { CallHandler, ExecutionContext, NestInterceptor, NotFoundException, ForbiddenException } from "@nestjs/common";
import * as jwt from 'jsonwebtoken'
import { isObjectIdOrHexString } from "mongoose";


export class UserInterceptor implements NestInterceptor {
    async intercept(
        context: ExecutionContext, handler: CallHandler
    ) {
        const request = context.switchToHttp().getRequest()
        const token = request?.headers?.authorization?.split('Bearer ')[1]


        if (request.params.id && !isObjectIdOrHexString(request.params.id))
            throw new ForbiddenException

        try {
            const user = jwt.decode(token) || {}
            request.user = user


        } catch (error) {
            throw new ForbiddenException
        }
        return handler.handle()
    }
}