import { Controller, Get, Post, ValidationPipe, Param } from '@nestjs/common';
import { Body, Query, Req, Res } from '@nestjs/common/decorators';
import { UsePipes } from '@nestjs/common/decorators/core/use-pipes.decorator';
import { rejects } from 'assert';
import { Request, request, Response } from 'express';
import { resolve } from 'path';
import { GetDataDto } from 'src/modules/dtos/getData.dto';
import { GetDataService } from 'src/modules/services/get-data-service/get-data-service';

@Controller('account/get-profile-data')
export class GetDataController {
    constructor(private getDataService: GetDataService) { }


    



    @Post()
    @UsePipes(new ValidationPipe())
    enteredUsername(@Body() userData: GetDataDto , @Res() res:Response ) {
        const username = userData.username
        const getInfo = async ()=>{
            const data = await new Promise((resolve , rejects) =>{
               const userData =  this.getDataService.findByUsername(username);
                resolve(userData);
            })
            return data
        }
        getInfo().then((Data) =>{
            res.send(Data);
        })
               
    
    }

}






// getByUsername(username)
// return this.getDataService.getByUsername(username);












