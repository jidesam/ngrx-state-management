import { createReducer, on } from "@ngrx/store";
import { changeChennelName, customIncrement, decrement, increment, reset } from "./counter.actions";
import { Action } from "rxjs/internal/scheduler/Action";
import { counterState } from "./types/counter.types";

const initialState : counterState = {
    counter : 0,
    name: 'olusesan'
}

 export const _counterReducer = createReducer(
   initialState,
   on(increment, (state, action) =>{
    return{
        ...state,
        counter: state.counter + action.value
    }
   }),
   on(decrement, (state, action) =>{
    return{
        ...state,
        counter: state.counter - action.value
    }
   }),
   on(reset, (state) =>{
    return{
        ...state,
        counter :0
    }
   }),
   on(customIncrement, (state, action) =>{
    return{
        ...state,
        counter: state.counter + action.value
    }
   }),
   on(changeChennelName, (state) =>{
    return {
        ...state, 
        name: "samson's Channel"
    }
   })
);

// export function counterReducer(state, action){
//     return _counterReducer(state, action)
// }