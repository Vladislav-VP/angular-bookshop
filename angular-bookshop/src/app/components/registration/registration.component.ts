import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/entities/user';
import { UserRole } from 'src/app/enums/user-role';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css', ],
})

export class RegistrationComponent implements OnInit {

    roles = [UserRole.Viewer, UserRole.Admin, ]

    model:User;

    constructor( 
        private userService: UserService,
        private router: Router
    ) {        
        this.model = new User();
    }

    ngOnInit() {
    }

    register(newUser: User) {
        this.userService.register(this.model);
        this.router.navigate(['/shop', ]);
    }

}
