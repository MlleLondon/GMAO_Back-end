import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './role.entity/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {
    constructor(@InjectRepository(Role) private roleRepository : Repository<Role>) {}

    async getRoles() : Promise<Role[]>{
        const roles= await this.roleRepository.find({
            relations : ['users'],
            order : {name : 'ASC'}
        });
        roles.forEach(role => {
            role.users.forEach(user => {
                delete user.password;
            });
        });
        return roles;
    }

    async getRoleById(_id : number) : Promise<Role>{
        const role = await this.roleRepository.findOne({
            where : [
                {id: _id}
            ],
            relations: ['users'],
            order : {name: 'ASC'}
        });
        role.users.forEach(user => {
            delete user.password;
        });
        return role;
    }

    async getRolesByLevel(_level : number) : Promise<Role[]>{
        const roles= await this.roleRepository.find({
            where : [
                {level: _level}
            ],
            relations: ['users'],
            order: {name: 'ASC'}
        });
        roles.forEach(role => {
            role.users.forEach(user => {
                delete user.password;
            });
        });
        return roles;
    }
    async createRole(role: Role){
        return await this.roleRepository.save(role);
    }

    async updateRole(role : Role){
        return await this.roleRepository.save(role);
    }

    async deleteRole(role : Role){
        return await this.roleRepository.delete(role);
    }
}
