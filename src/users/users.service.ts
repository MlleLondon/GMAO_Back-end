import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { User } from './user.entity/user.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepository : Repository<User>) {}

    async getUsers(): Promise<User[]> {
        const users = await this.userRepository.find({
            relations: ['role'],
            order : {name: 'ASC'}
        });
        users.forEach(user => {
          delete user.password;
        });
        return users;
    }

    async getUserById(_id : number) : Promise<User>{
        const user= await this.userRepository.findOne({
            where : [
                {id: _id}
            ],
            relations: ['role'],
            order : {name: 'ASC'}
        })
        delete user.password;
        return await user;
    }

    async getUsersBySearch(search : string) : Promise<User[]>{
        const users = await this.userRepository.find({
            where : [
                {name: Like(`%${search}%`)},
                {firstname : Like(`%${search}%`)}
            ],
            relations: ['role'],
            order : {name: 'ASC'}
        });
        users.forEach(user => {
            delete user.password;
          });
        return users;
    }

    async createUser(user: User){
        return await this.userRepository.save(user);
    }

    async updateUser(user : User){
        return await this.userRepository.save(user);
    }

    async deleteUser(user : User){
        return await this.userRepository.delete(user);
    }
}
