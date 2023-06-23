import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlService {
  public signupUrl= environment.signupUrl
  public loginUrl = environment.loginUrl
  public apiKey = environment.apiKey

  constructor() { }
}
