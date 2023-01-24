import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { updateUserDto } from 'src/modules/dtos/updateData.dto';
import { User } from 'src/typeorm/entities/User';
import { Repository } from 'typeorm';

@Injectable()
export class UpdateDataService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>,
    ) {}

    updateUser(username:string , updateUserData:updateUserDto){
        return this.userRepository.update({username} , {...updateUserData});

    }
    
}
