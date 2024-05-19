import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { OrganizationsService } from 'src/services/organizations/organizations.service';
import { Organization } from 'src/entities/organization/organization.entity';

@Controller('organizations')
export class OrganizationsController {

    constructor(private service : OrganizationsService) {}

    @Get()
    getAll(@Param() params){
        return this.service.getOrgas();
    }

    @Get(':id')
    getById(@Param() params){
        return this.service.getOrgaById(params.id);
    }

    @Get('name/:name')
    getByName(@Param() params){
        return this.service.getOrgasByName(params.name);
    }

    @Get('zip/:zip')
    getByZipCode(@Param() params){
        return this.service.getOrgasByZipCode(params.zup);
    }

    @Post()
    create(@Body() orga: Organization){
        return this.service.createOrga(orga);
    }

    @Put()
    update(@Body() orga : Organization){
        return this.service.updateOrga(orga);
    }

    @Delete(':id')
    delete(@Param() params){
        return this.service.deleteOrga(params.id);
    }
}
