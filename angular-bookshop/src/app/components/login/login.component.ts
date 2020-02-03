import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/entities/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css', ],
})
export class LoginComponent implements OnInit {

    model: User;
  
    constructor(
        private userService: UserService,
        private router: Router
    ) { 
        this.model = new User();
    }

    ngOnInit() {
    }

    login() {
        this.userService.login(this.model.email, this.model.password);
        this.router.navigate(['/shop', ]);
    }
}
