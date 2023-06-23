import { createAction, props } from "@ngrx/store"
import { Post } from "./types/post.types"




export const addPost = createAction(
    '[Posts page] addpost',
    props<{post: Post}>()
)

export const updatePost = createAction(
    '[Update Post] ',
    props<{post: Post}>()
)

export const deletePost = createAction(
    '[Delete] delete Post',
    props<{id:any}>()
)