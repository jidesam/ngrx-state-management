import { createReducer, on } from "@ngrx/store";
import { postState } from "./types/post.types";
import { addPost, deletePost, updatePost } from "./post.actions";
import { Action } from "rxjs/internal/scheduler/Action";
import { state } from "@angular/animations";

const initialState: postState={
    posts : [
        {
            id: '1',
            title: 'Lucky Man',
            description: 'sample book'
        },
        {
            id: '2',
            title: 'Lucky Man2',
            description: 'sample book 2'
        }
    ]
}


 export const  _postReducer = createReducer(
    initialState,
    on(addPost, (state, actions) =>{

        let post = {...actions.post};
        post.id = (state.posts.length +1).toString()
        
        return{
            ...state,
            posts: [...state.posts, post]
        }
    }),
    on(updatePost,(state, action) =>{
         const updatedPost = state.posts.map((post) =>{
            return action.post.id === post.id? action.post : post
         })
        return{
            ...state,
            posts:updatedPost
        }
    } ),
    on(deletePost, (state, action) =>{
        const deletedPost = state.posts.filter((post) =>{
            return post.id !== action.id
        })
        return{
            ...state,
            posts: deletedPost
        }
    })
)


