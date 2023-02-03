import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Exclude, Expose, Transform } from 'class-transformer';
import { Document } from 'mongoose';


interface Image {
    url: string
}


@Schema({
    toJSON: {
        transform(doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        },
    }
})
export class PlanModel extends Document {

    @Prop({ required: true })
    title: string

    @Prop({ required: true })
    fee: number

    @Prop({ required: true, unique: true })
    lenght: number

    @Prop()
    salePercent?: number

}
export const PlanSchema = SchemaFactory.createForClass(PlanModel)