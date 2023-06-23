import { createAction, props } from "@ngrx/store";
import { User } from "./state/auth.state";

export const signupStart = createAction(
    '[auth Page] signup start',
    props<{email: string, password: string}>()
)

export const signupSuccess = createAction(
    '[auth page] signup success',
    props<{user: User}>()
)

export const signupFailure = createAction(
    '[auth page] signup Failure' 
)


export const loginStart = createAction(
    '[auth Page] login start',
    props<{email: string, password: string}>()
)

export const loginSuccess = createAction(
    '[auth Page] login success',
    props<{user: User}>()
)

export const loginFailure = createAction(
    '[auth Page] login failure'
)
