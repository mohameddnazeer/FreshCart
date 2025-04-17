import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environments } from '../../../../environments/environments';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private https: HttpClient) {}
  private router = inject(Router);
  login(date: any): Observable<any> {
    return this.https.post(environments.baseUrl + 'auth/signin', date);
  }

  register(data: any): Observable<any> {
    return this.https.post(environments.baseUrl + 'auth/signup', data);
  }

  saveToken(token: string): void {
    if (typeof localStorage != 'undefined')
      localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    if (typeof localStorage != 'undefined') {
      return localStorage.getItem('authToken');
    }
    return null;
  }

  isAuthenticated(): boolean {
    if (typeof localStorage != 'undefined')
      return !!localStorage.getItem('authToken');

    return false;
  }
  removeToken(): void {
    if (typeof localStorage != 'undefined') {
      localStorage.removeItem('authToken');
      this.router.navigate(['/login']);
    }
  }

  decodeToken(): void {
    try {
      if (typeof localStorage != 'undefined') {
        const decode = jwtDecode(localStorage.getItem('authToken') as string);
        console.log(decode);
      }
    } catch {
      this.removeToken();
    }
  }
}
