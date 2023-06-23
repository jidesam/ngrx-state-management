import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterState } from "./types/counter.types";
import { state } from "@angular/animations";

const getCounterState =createFeatureSelector<counterState>('counter')
export const COUNTER_STATE_NAME ='counter'

export const getCounter = createSelector(getCounterState, (state) =>{
    return state.counter
})

export const getName = createSelector(getCounterState, (state) =>{
    return state.name
})