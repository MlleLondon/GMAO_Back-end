import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/entities/role/role.entity';
import { Repository } from 'typeorm';
import { Authorization } from 'src/entities/authorization/authorization.entity';
import { AuthorizationsService } from '../authorizations/authorizations.service';

@Injectable()
export class RolesService {
    constructor(@InjectRepository(Role) private roleRepository : Repository<Role>, private authoService: AuthorizationsService) {}

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

    async manageAuthosIntoRole(roleId : number, authosIds: number[]) : Promise<Role>{
        let role: Role;
        let autho: Authorization;
        let authos: Authorization[] = [];

        //On récupère le role en fonction de l'id
        role= await this.roleRepository.findOneBy({id: roleId});

        //On récupère les organisations
        for(let i=0; i< authosIds.length; i++){
            autho= await this.authoService.getAuthoById(authosIds[i]);
            authos.push(autho);
        }
        //On modifie les authorisations du role récupéré avec le tableau d'authorisations
        role.authorizations=authos;
        return await this.roleRepository.save(role);
    }
}
