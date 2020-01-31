import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entities/user';
import { UserRole } from 'src/app/enums/user-role'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    roles = [UserRole.Viewer, UserRole.Admin, ]

    model = new User();

    constructor() {
     }

    ngOnInit() {
  }

}
