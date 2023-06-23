import { createReducer, on } from "@ngrx/store";
import { sharedState } from "./shared.state";
import { sharedLoadingSpinner } from "./shared.action";

const initialState: sharedState = {
    showLoading: false
}




export const sharedReducer = createReducer(
    initialState, 
    on(sharedLoadingSpinner, (state, action) =>{
        return{
            state,
            showLoading: action.status
        }
    } )
)