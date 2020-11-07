import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/users/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createLogin(data): Observable<any> {
    return this.http.post(baseUrl+'login', data);
  }

  createRegister(data): Observable<any> {
    return this.http.post(baseUrl+'register', data);
  }
  
  sendEmail(data): Observable<any> {
    return this.http.post(baseUrl+ 'send', data);
  }
}
