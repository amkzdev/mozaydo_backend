import { createParamDecorator, ExecutionContext } from "@nestjs/common"


export interface UserType { name: string, id: number, iat: number, exp: number }

export const UserInfo = createParamDecorator((data, context: ExecutionContext) => {

    const request = context.switchToHttp().getRequest()
    return request.user
})