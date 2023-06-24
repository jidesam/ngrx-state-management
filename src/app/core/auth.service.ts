import { Injectable, OnInit } from '@angular/core';
import { BaseUrlService } from './base-url.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { authResponse, User } from '../auth/store/state/auth.state';
@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseUrlService implements OnInit{

  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit(): void {

   
  }

  signUp(email: string, password: string): Observable<authResponse>{
    return this.http.post<authResponse>(`${this.signupUrl}?key=${this.apiKey}`, {
      email, password,
      returnSecureToken: true
    })
  }

 

  login(email: string, password: string): Observable<authResponse>{
    return this.http.post<authResponse>(`${this.loginUrl}?key=${this.apiKey}`, {
      email, password,
      returnSecureToken: true
    })
  }

  formatUser(data: authResponse){

    const expirationDate = new Date( new Date().getDate() + +data.expiresIn * 1000)
    const user = new User(data.email, data.idToken, data.localId, expirationDate);
    return user
  }


  getErrorMessages(message: string){
    switch(message){
      case 'EMAIL_NOT_FOUND':
        return 'email not found';
      

        case 'INVALID_PASSWORD':
          return ' invalid password';

          case 'EMAIL_EXIST':
            return 'email exist';
            
            default:
              return 'unknown error occured. Please try again'
    }
  }

}

