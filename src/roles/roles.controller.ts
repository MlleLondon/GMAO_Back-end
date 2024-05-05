import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RolesService } from './roles.service';
import { Role } from './role.entity/role.entity';

@Controller('roles')
export class RolesController {
    constructor(private service: RolesService){}

    @Get()
    getAll(@Param() params){
        return this.service.getRoles();
    }

    @Get(':id')
    getById(@Param() params){
        return this.service.getRoleById(params.id);
    }

    @Get('level/:level')
    getByLevel(@Param() params){
        return this.service.getRolesByLevel(params.level);
    }

    @Post()
    create(@Body() role: Role){
        return this.service.createRole(role);
    }

    @Put()
    update(@Body() role : Role){
        return this.service.updateRole(role);
    }

    @Delete(':id')
    delete(@Param() params){
        return this.service.deleteRole(params.id);
    }
}
