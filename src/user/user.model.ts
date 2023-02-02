import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UserModel extends Document {

    @Prop()
    name: number

    @Prop({ required: true, unique: true })
    phone: string;

    @Prop({ unique: true })
    email: string

    @Prop()
    password: string


}
export const UserSchema = SchemaFactory.createForClass(UserModel)