import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { MiddlewareConsumer, NestModule } from '@nestjs/common/interfaces';
import { User } from 'src/typeorm/entities/User';
import { GetDataController } from './controllers/get-data/get-data.controller';
import { UpdateDataController } from './controllers/update-data/update-data.controller';
import { GetDataMiddleware } from './middlewares/get-data/get-data.middleware';
import { GetDataService } from './services/get-data-service/get-data-service';
import { UpdateDataService } from './services/update-data-service/update-data-service';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers: [GetDataController, UpdateDataController],
  providers: [GetDataService, UpdateDataService]
})
export class ModulesModule implements NestModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply(GetDataMiddleware).forRoutes("account/get-profile-data")
  }
}
