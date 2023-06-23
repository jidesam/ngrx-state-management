import { createReducer, on } from "@ngrx/store";
import { authState } from "./state/auth.state";
import {  signupSuccess } from "./auth.actions";

const initialState: authState={
    user: null

}


export const authReducer = createReducer(
    initialState,
   on(signupSuccess, (state, action) =>{
    console.log(action)
    return{
        ...state,
        user: action.user
    }
   })
)