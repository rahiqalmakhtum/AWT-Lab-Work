import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor (private readonly usersService: UsersService){}

    // // GET/users --> []
    // @Get()
    // getUsers() {
    //     return []
    // }

    // GET/users?type=fast --> []
    @Get()
    getUser(@Query('type') type: 'cse' | 'eee') { 
        return this.usersService.getUser(type);
    }


    // GET/users/:id --> {...}
    @Get(':id')
    getOneuser(@Param('id') id: string){
        return {
            id,
        }
    }

    // POST/users
    @Post()
    createUser(@Body() createUsersDto: CreateUsersDto) {
        return {
            name: createUsersDto.name,
        }
    }
}
