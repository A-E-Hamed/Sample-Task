import { Injectable, UsePipes } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { User } from 'src/typeorm/entities/User';


@Injectable()
export class GetDataService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>,
    ) { }

    

    findByUsername(username:string):Promise<User | undefined>{
        return this.userRepository.findOneBy({username});
    }


}
