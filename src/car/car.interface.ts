export interface Car {

    id?: string,
    title: string,
    model?: number,
    company?: string,
    trunkNumber?: string | number,
    milage?: number,
    shaftCount?: number,
    tip?: string,
    color?: string,
    gearType?: string,
    capacity?: string,
    plaque?: string,
    system?: string,
    carType?: string,
    manufacturerCountry?: string,
    chassisNumber?: string,
    cylinderCount?: string
    motorNumber?: string,
    fuelType?: string,
    controlType?: string,
    automobileItemDesc?: string,
    markingCost?: string,
    municipalCost?: string,
    tabsareCost?: string,
    taxInJobs?: string,
    admissionCost?: string,
    parkingCost?: string,
    violationCost?: string,
    leasingDebtCost?: string,
    maintenanceLoc?: string,
    price?: number,
    totalPrice?: string,
    partyNo?: number,
    createdAt?: Date,
    updatedAt?: Date;
    images?: Image[]

}
interface Image {
    url: string
}

export interface CreateCarInteface extends Car {
    // images?: File[],

}
