import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { signupStart } from '../store/auth.actions';
import { sharedLoadingSpinner } from 'src/app/shared/components/store/shared.action';
import { share } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm!: FormGroup

  constructor(private store: Store<AppState>){}
  ngOnInit(): void {
    this.initsignUpForm()
  }


  initsignUpForm(){
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  }

  signUp(){
    this.store.dispatch(sharedLoadingSpinner({status: true}))
    this.store.dispatch(signupStart(this.signUpForm.value))
    this.store.dispatch(sharedLoadingSpinner({status: false}))
    this.signUpForm.reset()
  }

}
