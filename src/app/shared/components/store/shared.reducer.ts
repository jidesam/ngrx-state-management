import { createReducer, on } from "@ngrx/store";
import { sharedState } from "./shared.state";
import { SetErrorMessage, sharedLoadingSpinner } from "./shared.action";

const initialState: sharedState = {
    showLoading: false,
    message: '',
}




export const sharedReducer = createReducer(
    initialState, 
    on(sharedLoadingSpinner, (state, action) =>{
        return{
            ...state,
            showLoading: action.status
        }
    } ),
    on(SetErrorMessage, (state, action) =>{
        return{
            ...state,
            message: action.message
        }
    })
)