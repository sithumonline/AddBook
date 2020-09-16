import { Injectable } from '@angular/core';
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

  login(email: string, password: string) {
    return this.http.post<string>(
      this.API_URL,
      { email, password },
      httpOptions
    );
  }
}
