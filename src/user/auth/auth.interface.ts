import { IsNotEmpty, IsString, MinLength } from "class-validator";

export interface Auth { }

export interface SignupParams {
    email: string,
    password: string,
    name: string,
    phone: string
}

export interface SigninParams {
    password: string;
    phone: string
}