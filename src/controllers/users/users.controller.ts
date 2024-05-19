import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from 'src/services/users/users.service';
import { User } from 'src/entities/user/user.entity';

@Controller('users')
export class UsersController {

    constructor(private service: UsersService){}

    @Get()
    getAll(@Param() params){
        return this.service.getUsers();
    }

    @Get(':id')
    getById(@Param() params){
        return this.service.getUserById(params.id);
    }

    @Get('search/:search')
    getBySearch(@Param() params){
        return this.service.getUsersBySearch(params.search);
    }

    @Post()
    create(@Body() user: User){
        return this.service.createUser(user);
    }

    @Put()
    update(@Body() user : User){
        return this.service.updateUser(user);
    }

    @Delete(':id')
    delete(@Param() params){
        return this.service.deleteUser(params.id);
    }

}
