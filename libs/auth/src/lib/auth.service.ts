import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://0.0.0.0:3000/'; // Replace with your Rails API URL

  constructor(private http: HttpClient) {}

  signUp(user: any): Observable<any> {
    const url = `${this.apiUrl}/api/signup`;
    return this.http.post(url, user);
  }

  login(credentials: any): Observable<any> {
    const url = `${this.apiUrl}/api/login`;
    return this.http.post(url, credentials);
  }
}
