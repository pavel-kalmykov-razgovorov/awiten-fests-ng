import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, OnDestroy {
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignin(f: NgForm) {
    const username = f.value.username;
    const password = f.value.password;
    this.authService.login(username, password);
  }

  ngOnDestroy() {

  }
}
