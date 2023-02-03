import { ObjectId } from "mongoose";

export interface User {
    id?: string,
    name: string;
    phone: string;
    email?: string;
    password: string,
    userType: UserType,
    activePlanId: string  | ObjectId,
    planDeadline: Date
}

export interface requestUserType {
    name: string;
    phone: string;
    email?: string;
    password: string,
    activePlanId?: string | ObjectId,
    planDeadline?: Date
}


export enum UserType {
    SUPERADMIN = "superadmin",
    ADMIN = "admin",
    USER = "user"
}