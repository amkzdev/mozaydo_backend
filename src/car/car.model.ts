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
export class CarModel extends Document {

    @Prop({ required: true })
    title: string;

    @Prop()
    model?: number

    @Prop()
    createdAt?: Date;

    @Prop()
    updatedAt?: Date;

    @Prop()
    company?: string

    @Prop()
    trunkNumber: string

    @Prop()
    milage?: number

    @Prop()
    shaftCount?: number

    @Prop()
    tip?: string

    @Prop()
    color?: string

    @Prop()
    gearType?: string

    @Prop()
    capacity?: string

    @Prop()
    plaque?: string

    @Prop()
    system?: string

    @Prop()
    carType?: string

    @Prop()
    manufacturerCountry?: string

    @Prop()
    chassisNumber?: string

    @Prop()
    cylinderCount?: string

    @Prop()
    motorNumber?: string

    @Prop()
    fuelType?: string

    @Prop()
    controlType?: string

    @Prop()
    automobileItemDesc?: string

    @Prop()
    markingCost?: string

    @Prop()
    municipalCost?: string

    @Prop()
    tabsareCost?: string

    @Prop()
    taxInJobs?: string

    @Prop()
    admissionCost?: string

    @Prop()
    parkingCost?: string

    @Prop()
    violationCost?: string

    @Prop()
    leasingDebtCost?: string

    @Prop()
    maintenanceLoc?: string

    @Prop()
    price?: number

    @Prop()
    totalPrice?: string

    @Prop({ required: true })
    partyNo?: number

    @Exclude()
    __v?: any;

    @Prop()
    images?: Array<Image>

    @Prop()
    auctionNumber: number



}
export const CarSchema = SchemaFactory.createForClass(CarModel)