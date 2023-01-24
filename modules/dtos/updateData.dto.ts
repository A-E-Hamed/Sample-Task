import { IsEmail, IsEmpty, isPhoneNumber } from "class-validator";

export class updateUserDto {
    
    first_name:string;
    middle_name:string;
    last_name:string;
    username:string;
    email:string;
    city:string;
    state:string;
    phone:string;
    gender:string;
    date_of_birth:string;
    
}