import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UserSchema } from './user.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'users', schema: UserSchema }])],
  controllers: [AuthController],
  providers: [AuthService]
})
export class UserModule { }
