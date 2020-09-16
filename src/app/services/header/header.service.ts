import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class HeaderService implements HttpInterceptor {
  user = JSON.parse(localStorage.getItem('user'));

  constructor(private authService: AuthService) {}
  authHeader() {
    // if (this.user && this.user.token) {
    //   // return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
    //   return { 'x-access-token': this.user.token }; // for Node.js Express back-end
    // } else {
    //   console.log('Erro in authHeader');
    //   return {};
    // }
    const user = this.authService.userValue;
    const isLoggedIn = user && user.token;
    if (isLoggedIn) {
      return user.token;
    } else {
      console.log('Erro in authHeader');
      return {};
    }
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add auth header with jwt if user is logged in and request is to the api url
    const user = this.authService.userValue;
    const isLoggedIn = user && user.token;
    //const isApiUrl = request.url.startsWith(environment.apiUrl);
    if (isLoggedIn) {
      //if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `x-access-token ${user.token}`,
        },
      });
    }

    return next.handle(request);
  }
}
