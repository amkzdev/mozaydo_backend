import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';


enum UserType {
    SUPERADMIN = "SUPERADMIN",
    ADMIN = "ADMIN",
    USER = "user"
}

@Schema()
export class UserModel extends Document {

    @Prop()
    name: string

    @Prop({ required: true, unique: true })
    phone: string;

    @Prop({ unique: true })
    email: string

    @Prop()
    password: string


    @Prop()
    userType: UserType


}
export const UserSchema = SchemaFactory.createForClass(UserModel)