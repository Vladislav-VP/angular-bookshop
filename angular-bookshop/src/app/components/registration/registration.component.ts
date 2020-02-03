import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entities/user';
import { UserRole } from 'src/app/enums/user-role';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    roles = [UserRole.Viewer, UserRole.Admin, ]

    model:User;

    constructor( 
        private userService: UserService
    ) {        
      this.model = new User();
    }

    ngOnInit() {
    }

    register(model) {
        this.userService.register(model);
    }



}
