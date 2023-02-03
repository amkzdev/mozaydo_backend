import { CallHandler, ExecutionContext, NestInterceptor, NotFoundException, UnauthorizedException ,ForbiddenException} from "@nestjs/common";
import * as jwt from 'jsonwebtoken'


export class UserInterceptor implements NestInterceptor {
    async intercept(
        context: ExecutionContext, handler: CallHandler
    ) {
        const request = context.switchToHttp().getRequest()
        const token = request?.headers?.authorization?.split('Bearer ')[1]

        try {
            const user = jwt.decode(token) || {}
            request.user = user

        } catch (error) {
            throw new ForbiddenException
        }
        return handler.handle()
    }
}