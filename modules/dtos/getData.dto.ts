import { IsNotEmpty } from "class-validator";

export class GetDataDto{
    static username(username: any): Promise<import("../../typeorm/entities/User").User> {
        throw new Error('Method not implemented.');
    }
    first_name:string;
    middle_name:string;
    last_name:string;
    @IsNotEmpty()
    username:string;
    email:string;
    city:string;
    state:string;
    phone:string;
    gender:string;
    dato_of_birth:string;    
}