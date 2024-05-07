import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
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

    @Put(':id/authos')
    async createRoleAuthosRelation(
      @Param('id') id: string,
      @Body() body: { authos: number[] },
    ) {
      const roleId = +id;
      const authosIds = body.authos;
      try {
        const updateRole =
          await this.service.manageAuthosIntoRole(
            roleId,
            authosIds,
          );
        return {
          message:
            'SUCCESS : Relations entre le Role et les Authorisations effectuées !',
          data: updateRole,
        };
      } catch (error) {
        if (error.status === HttpStatus.NOT_FOUND) {
          throw new HttpException('Role not found', HttpStatus.NOT_FOUND);
        }
        throw new HttpException(
          'ERREUR lors de la relation entre le Role et les Authorisations !',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }

}
