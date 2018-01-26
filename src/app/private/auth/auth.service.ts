import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(
    private http: Http,
    private router: Router) {}

  private addContentTypeHeader(headers: Headers) {
    headers.append('Content-type', 'application/json');
  }

  private addAcceptHeader(headers: Headers) {
    headers.append('Accept', 'application/json');
  }

  private addAuthentication(headers: Headers) {
    headers.append('Authorization', 'Bearer ' + localStorage.token);
  }

  login(username: string, password: string) {
    const headers = new Headers();
    this.addContentTypeHeader(headers);
    this.http.post('http://localhost:8000/api/auth/login', JSON.stringify({
      username: username,
      password: password
    }), { headers: headers })
      .subscribe(
        res => {
          this.router.navigate(['/admin']);
          localStorage.setItem('token', res.json().access_token);
          localStorage.setItem('role', res.json().user.role)
        },
        err => {
          console.log(JSON.stringify(err.json()));
        }
      );
  }

  signup(email: string, name: string, password: string, username: string, role: string) {
    const headers = new Headers();
    this.addContentTypeHeader(headers);
    this.http.post('http://localhost:8000/api/users', JSON.stringify({
      name: name,
      role: role,
      username: username,
      email: email,
      password: password
    }), { headers: headers })
      .subscribe(
        res => {
          this.router.navigate(['/admin']);
        },
        err => {
          console.log(JSON.stringify(err.json()));
        }
      );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/']);
  }

  isAuthenticated() {
    return localStorage.token;
  }

  getRole() {
    return localStorage.role;
  }
}
