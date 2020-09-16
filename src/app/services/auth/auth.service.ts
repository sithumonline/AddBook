import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<object> {
    return this.http.post<object>(
      `${this.API_URL}users/login`,
      { email, password },
      httpOptions
    );
  }
}
