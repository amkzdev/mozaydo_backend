export interface User {
    id?: string,
    name: string;
    phone: string;
    email?: string;
    password: string,
    userType: UserType,
    activePlanId: string,
    planDeadline: Date
}

export enum UserType {
    SUPERADMIN = "superadmin",
    ADMIN = "admin",
    USER = "user"
}