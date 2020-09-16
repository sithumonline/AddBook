import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { User } from '../../models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API_URL: string = 'https://mern-01.now.sh/users/login';
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http
      .post<User>(this.API_URL, {
        email,
        password,
      })
      .pipe(
        map((user) => {
          localStorage.clear();
          localStorage.setItem('user', user.token);
          return user;
        })
      );
  }
  public get userValue(): User {
    return this.userSubject.value;
  }
}
