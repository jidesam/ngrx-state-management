import { _postReducer } from "../post/store/post.reducers";
import { postState } from "../post/store/types/post.types";
import { sharedReducer } from "../shared/components/store/shared.reducer";
import { SHARED_STATE_NAME } from "../shared/components/store/shared.selectors";
import { sharedState } from "../shared/components/store/shared.state";
import { _counterReducer } from "../store/counter.reducer";
import { counterState } from "../store/types/counter.types";

export interface AppState{
    // counter: counterState,
    // posts: postState

    [SHARED_STATE_NAME] : sharedState
}

export const appReducer={
    // counter: _counterReducer,
    // post: _postReducer

    [SHARED_STATE_NAME] : sharedReducer
}