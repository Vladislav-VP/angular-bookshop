import { Injectable } from '@angular/core';
import { User } from 'src/app/entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    user: User;

    constructor() { }

    register(newUser: User) {
        this.user = new User();
        this.user.name = newUser.name;
        this.user.email = newUser.email;
        this.user.password = newUser.password;
        this.user.role = newUser.role;
    }
}
