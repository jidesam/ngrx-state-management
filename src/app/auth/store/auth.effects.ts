import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/core/auth.service";
import {  loginStart, loginSuccess, signupStart, signupSuccess } from "./auth.actions";
import { catchError, exhaustMap, map, of } from "rxjs";
import { authResponse } from "./state/auth.state";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { SetErrorMessage, sharedLoadingSpinner } from "src/app/shared/components/store/shared.action";

@Injectable()
export class authEffects{
constructor(private actions$ : Actions, 
            private authService : AuthService,
            private store : Store<AppState>){}


signup$= createEffect(() =>{
    return this.actions$.pipe(
        ofType(signupStart),

        exhaustMap((action) =>{

            return this.authService.signUp(action.email, action.password).pipe(
                map((data: authResponse) =>{
                    this.store.dispatch(sharedLoadingSpinner({status: false}))
                    const user = this.authService.formatUser(data)
                    return signupSuccess({user})
                }),
                catchError((errorResp) =>{
                    const errMessage = this.authService.getErrorMessages(errorResp.error.error.message)
                    return of(SetErrorMessage({message: errMessage}))
                })
            )
        })
    )
})

login$ = createEffect(() =>{
    return this.actions$.pipe(
        ofType(loginStart), 
        exhaustMap((action) => {
            return this.authService.login(action.email, action.password).pipe(
                map((data) =>{
                    const user = this.authService.formatUser(data)
                    return loginSuccess({user})
                }),
                catchError((errorResp) =>{
                    const errorMessage = this.authService.getErrorMessages(errorResp.error.error.message);
                    return of(SetErrorMessage({message: errorMessage}))
                })
            )
        })
    )
})

}