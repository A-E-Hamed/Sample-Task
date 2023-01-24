import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';

export const config: TypeOrmModuleOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456789",
    database: "postgres",
    entities: [User],
    synchronize: true,
};