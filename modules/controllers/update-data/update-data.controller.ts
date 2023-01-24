import { Body, Controller, Param, Post, Put, Res, Get , UsePipes, ValidationPipe } from '@nestjs/common';
import { updateUserDto } from 'src/modules/dtos/updateData.dto';
import { UpdateDataService } from 'src/modules/services/update-data-service/update-data-service';
import { Request, request, Response } from 'express';


@Controller('account/update-profile-info')
export class UpdateDataController {
    [x: string]: any;
    constructor(private updateDataService :UpdateDataService){}
    
    @Put(':username')
    @UsePipes(new ValidationPipe)
    async updateUserByUsername(@Param('username') username:string , @Body() updateUserDto:updateUserDto){
        await this.updateDataService.updateUser(username, updateUserDto)
    }

    @Post()
    enteredUserName(@Body() userData: updateUserDto , @Res() res:Response){
        const firstName = userData.first_name
        const middleName = userData.middle_name
        const lastName = userData.last_name
        const username = userData.username
        const email = userData.email
        const state = userData.state
        const city = userData.city
        const phone = userData.phone
        const gender = userData.gender
        const dateOfBirth = userData.date_of_birth
        
        this.updateDataService.updateUser(username , {
            ...updateUserDto,
            first_name: firstName,
            middle_name: middleName,
            last_name: lastName,
            username: username,
            email: email,
            city: city,
            state: state,
            phone: phone,
            gender: gender,
            date_of_birth: dateOfBirth,
        });
                res.send("Data Updated Successfully to the Database.")

    }
    
}