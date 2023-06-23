import {createAction, props} from '@ngrx/store'

export const increment = createAction(
'[increment] counter',
    props<{value: number}>()
)

export const decrement = createAction(
    '[Decrement] Counter',
    props<{value: number}>()
)

export const reset = createAction(
    'Reset counter' 
)

export const customIncrement = createAction(
    'customIncrement',
    props<{value: number}>()
)

export const changeChennelName =createAction(
    'changeCHannel Name'
)