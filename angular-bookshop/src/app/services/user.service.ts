import { Injectable } from '@angular/core';
import { User } from 'src/app/entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  constructor() { }

  register(user) {
      this.user.name = user.name;
      this.user.email = user.email;
      this.user.password = user.password;
      this.user.role = user.role;
  }
}
