import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  getAuthStatus() {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://127.0.0.1:3000';

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
