import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(f: NgForm) {
    const email = f.value.email;
    const name = f.value.name;
    const username = f.value.username;
    const password = f.value.password;
    const role = f.value.role;
    this.authService.signup(email, name, password, username, role);
  }
}
