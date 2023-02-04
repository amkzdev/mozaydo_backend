import { Exclude, Expose, Type } from 'class-transformer';
import { IsNumber, IsPositive, IsString, IsNotEmpty, IsOptional, IsArray, ValidateNested } from 'class-validator';



export class createCarDto {
    @IsString()
    @IsNotEmpty()
    title: string

    @IsOptional()
    @IsNumber()
    model: number

    @IsOptional()
    @IsString()
    company?: string


    @IsNumber()
    @IsOptional()
    trunkNumber?: string | number

    @IsNumber()
    @IsOptional()
    milage?: number

    @IsNumber()
    @IsOptional()
    shaftCount?: number

    @IsString()
    @IsOptional()
    tip?: string

    @IsString()
    @IsOptional()
    color?: string

    @IsString()
    @IsOptional()
    gearType?: string

    @IsString()
    @IsOptional()
    capacity?: string

    @IsString()
    @IsOptional()
    plaque?: string

    @IsString()
    @IsOptional()
    system?: string

    @IsString()
    @IsOptional()
    carType?: string

    @IsString()
    @IsOptional()
    manufacturerCountry?: string

    @IsString()
    @IsOptional()
    chassisNumber?: string

    @IsString()
    @IsOptional()
    cylinderCount?: string

    @IsString()
    @IsOptional()
    motorNumber?: string

    @IsString()
    @IsOptional()
    fuelType?: string

    @IsString()
    @IsOptional()
    controlType?: string

    @IsString()
    @IsOptional()
    automobileItemDesc?: string

    @IsString()
    @IsOptional()
    markingCost?: string

    @IsString()
    @IsOptional()
    municipalCost?: string

    @IsString()
    @IsOptional()
    tabsareCost?: string

    @IsString()
    @IsOptional()
    taxInJobs?: string

    @IsString()
    @IsOptional()
    admissionCost?: string

    @IsString()
    @IsOptional()
    parkingCost?: string

    @IsString()
    @IsOptional()
    violationCost?: string

    @IsString()
    @IsOptional()
    leasingDebtCost?: string

    @IsString()
    @IsOptional()
    maintenanceLoc?: string

    attachments?: File[]

    @IsNumber()
    @IsOptional()
    price?: number | null

    @IsNumber()
    @IsOptional()
    totalPrice?: string

    @IsNumber()
    @IsNotEmpty()
    partyNo?: number

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Image)
    images?: Image[]


    @IsNotEmpty()
    @IsNumber()
    auctionNumber: number

}

export class CarResponseDto {

    @IsString()
    @IsNotEmpty()
    title: string

    @IsOptional()
    @IsNumber()
    model: number

    @IsOptional()
    @IsString()
    company?: string


    @IsNumber()
    @IsOptional()
    trunkNumber?: string | number

    @IsNumber()
    @IsOptional()
    milage?: number

    @IsNumber()
    @IsOptional()
    shaftCount?: number

    @IsString()
    @IsOptional()
    tip?: string

    @IsString()
    @IsOptional()
    color?: string

    @IsString()
    @IsOptional()
    gearType?: string

    @IsString()
    @IsOptional()
    capacity?: string

    @IsString()
    @IsOptional()
    plaque?: string

    @IsString()
    @IsOptional()
    system?: string

    @IsString()
    @IsOptional()
    carType?: string

    @IsString()
    @IsOptional()
    manufacturerCountry?: string

    @IsString()
    @IsOptional()
    chassisNumber?: string

    @IsString()
    @IsOptional()
    cylinderCount?: string

    @IsString()
    @IsOptional()
    motorNumber?: string

    @IsString()
    @IsOptional()
    fuelType?: string

    @IsString()
    @IsOptional()
    controlType?: string

    @IsString()
    @IsOptional()
    automobileItemDesc?: string

    @IsString()
    @IsOptional()
    markingCost?: string

    @IsString()
    @IsOptional()
    municipalCost?: string

    @IsString()
    @IsOptional()
    tabsareCost?: string

    @IsString()
    @IsOptional()
    taxInJobs?: string

    @IsString()
    @IsOptional()
    admissionCost?: string

    @IsString()
    @IsOptional()
    parkingCost?: string

    @IsString()
    @IsOptional()
    violationCost?: string

    @IsString()
    @IsOptional()
    leasingDebtCost?: string

    @IsString()
    @IsOptional()
    maintenanceLoc?: string

    attachments?: File[]

    @IsNumber()
    @IsOptional()
    price?: number | null

    @IsNumber()
    @IsOptional()
    totalPrice?: string

    @IsNumber()
    @IsNotEmpty()
    partyNo?: number


    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Image)
    images?: Image[]

    @IsOptional()
    @IsNumber()
    auctionNumber: number

    // @Exclude()
    // _id?: number

    // @Exclude()
    // __v?: number

    // @Expose({ name: "id" })
    // partyNumber() {
    //     if (this._id)
    //         return this._id.toString()

    // }

    constructor(partial: Partial<CarResponseDto>) {
        Object.assign(this, partial)
    }

}


class Image {
    @IsNotEmpty()
    @IsString()
    url: string
}