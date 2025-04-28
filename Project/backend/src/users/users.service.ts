import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        { id:0, name: 'rahiq', dept: 'cse'},
        { id:1, name: 'Dihan', dept: 'eee'}
    ];

    getUser(type?: 'cse' | 'eee' ){
        if(type){
            return this.users.filter((users) => users.dept == type)
        }

        return this.users;
    }
}
 