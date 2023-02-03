export interface User {
    id?:string,
    name: string;
    phone: string;
    email?: string;
    password: string,
    userType: UserType
}

export enum UserType {
    SUPERADMIN = "superadmin",
    ADMIN = "admin",
    USER = "user"
}