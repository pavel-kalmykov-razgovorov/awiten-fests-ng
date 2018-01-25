import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(
    private http: Http,
    private router: Router) {}

  login(username: string, password: string) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    this.http.post('http://localhost:8000/api/auth/login', JSON.stringify({
      username: username,
      password: password
    }), { headers: headers })
      .subscribe(
        res => {
          this.router.navigate(['/']);
          localStorage.setItem('token', res.json().access_token);
        },
        err => {
          console.log(JSON.stringify(err.json()));
        }
      )
  }

  logout() {
    localStorage.removeItem('token');
  }

  isAuthenticated() {
    return localStorage.token;
  }
}
