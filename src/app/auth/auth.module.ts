import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AUTH_STATE_NAME } from './store/auth.selectors';
import { authReducer } from './store/auth.reducers';
import { EffectsModule } from '@ngrx/effects';
import { authEffects } from './store/auth.effects';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule, 
    ReactiveFormsModule,
    StoreModule.forFeature(AUTH_STATE_NAME, authReducer),
    EffectsModule.forFeature([authEffects])
  ]
})
export class AuthModule { }
