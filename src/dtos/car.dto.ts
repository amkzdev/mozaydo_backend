import { Exclude,Expose } from 'class-transformer';
import { IsNumber, IsPositive, IsString, IsNotEmpty, IsOptional } from 'class-validator';



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
    partyNo?: string

}

export class CarResponseDto {

    @Exclude()
    created_at: Date;

    @Exclude()
    __v: string;

    @Exclude()
    _id:string

    @Expose({ 'name': "id" })
    transformCreatedAt() {
        return this._id
    }

    // constructor(partial: Partial<ReportResponseDto>) {
    //     Object.assign(this, partial)
    // }

}