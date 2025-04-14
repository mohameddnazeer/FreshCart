import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../../../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private https: HttpClient) { }

  login(date :any): Observable<any>{
    return this.https.post(environments.baseUrl+'auth/signin',date)
  }

  register(data: any): Observable<any> {
    return this.https.post(environments.baseUrl+'auth/signup',data)
  }

  saveToken(token:string):void{
    localStorage.setItem('authToken',token)
  }

  getToken():string | null{
    return localStorage.getItem('authToken')
  }

  isAuthenticated():boolean{
    return !!localStorage.getItem('authToken');
  }
}
