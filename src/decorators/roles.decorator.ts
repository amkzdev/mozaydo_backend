import { UserType } from "src/user/user.interface";
import { SetMetadata } from '@nestjs/common'

export const Roles = (...roles: UserType[]) => SetMetadata('roles',roles)