import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { postSelector, postState } from "./types/post.types";
import { state } from "@angular/animations";

const getPostState = createFeatureSelector<postState>('post')
export const POST_STATE_NAME = 'post'

export const getPosts = createSelector(getPostState, (state) =>{
    return state.posts
})

export const getPostById = createSelector(getPostState,
     (state:postSelector, props: { id: any; }) =>{
    return state.posts.find((post: { id: any; }) => post.id === props.id)
})