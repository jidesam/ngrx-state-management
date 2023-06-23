import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/auth.service';
import { AppState } from 'src/app/state/app.state';
import { loginStart, loginSuccess } from '../store/auth.actions';
import { sharedLoadingSpinner } from 'src/app/shared/components/store/shared.action';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup
  constructor(private authService: AuthService,
            private store : Store<AppState>){}

  ngOnInit(): void {
    this.initLoginForm()
  }

  initLoginForm(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  }

  onLogin(){
    this.store.dispatch(sharedLoadingSpinner({status: true}))
    this.store.dispatch(loginStart(this.loginForm.value))
    this.store.dispatch(sharedLoadingSpinner({status: false}))

    this.loginForm.reset()
  }

  
}
