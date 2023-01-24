import {Column ,Entity , PrimaryGeneratedColumn} from 'typeorm';

@Entity({name:'users'})
export class User{
    @PrimaryGeneratedColumn()
    id:BigInteger;

    @Column()
    first_name:string;
    @Column()
    middle_name:string;
    @Column()
    last_name:string;
    @Column()
    email:string;
    @Column()
    username:string;
    @Column()
    state:string;
    @Column()
    city:string;
    @Column()
    phone:string;
    @Column()
    gender:string;
    @Column()
    date_of_birth:string;
}