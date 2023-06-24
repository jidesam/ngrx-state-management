import { createFeatureSelector, createSelector } from "@ngrx/store";
import { sharedState } from "./shared.state";
import { SetErrorMessage } from "./shared.action";

const getLoadingSelectorState = createFeatureSelector<sharedState>('showLoading')

export const SHARED_STATE_NAME = 'shared'

export const getLoader = createSelector(getLoadingSelectorState, (state)=>{
    return state?.showLoading
})

export const getErrorMessage = createSelector(SetErrorMessage, (state) =>{
    return state?.message
})