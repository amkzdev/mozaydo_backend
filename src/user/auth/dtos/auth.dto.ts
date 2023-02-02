import { IsString, IsNotEmpty, IsEmail, MinLength, Matches } from 'class-validator'

export class SignupDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @Matches(/09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/, { message: "شماره تلفن صحیح نمی باشد." })
    phone: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(5)
    password: string;
}