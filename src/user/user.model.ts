import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import { Transform } from 'class-transformer';
import { Document } from 'mongoose';
import { UserType } from './user.interface';




@Schema({
    versionKey: false,
    toJSON: {
        transform(doc, ret, options) {
            ret.id = ret._id;
            delete ret?._id;
            delete ret?.__v;
        },
    }
})
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


    @Prop()
    activePlanId: string

    @Prop()
    planRemaining: number

    @Transform(({ value }) => value.toString(), { toPlainOnly: true })
    _id: ObjectID;


}
export const UserSchema = SchemaFactory.createForClass(UserModel)