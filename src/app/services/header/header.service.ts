import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  user = JSON.parse(localStorage.getItem('user'));

  constructor() {}
  authHeader() {
    if (this.user && this.user.token) {
      // return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
      return { 'x-access-token': this.user.token }; // for Node.js Express back-end
    } else {
      console.log('Erro in authHeader');
      return {};
    }
  }
}
