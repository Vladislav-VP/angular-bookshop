import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  // - TODO: Add role

  constructor() { }

  ngOnInit() {
  }

}
