import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../../models/User';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API_URL: string = 'https://mern-01.now.sh/';
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  constructor(private http: HttpClient) {}

  // login(email: string, password: string): Observable<object> {
  //   return this.http.post<object>(
  //     `${this.API_URL}users/login`,
  //     { email, password },
  //     httpOptions
  //   );
  // }
  login(username: any, password: any) {
    return this.http
      .post<User>(`${this.API_URL}/users/authenticate`, {
        username,
        password,
      })
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          return user;
        })
      );
  }
  public get userValue(): User {
    return this.userSubject.value;
  }
}
