import { createAction, props } from "@ngrx/store";

export const sharedLoadingSpinner = createAction(
    '[shared state] set loading spinner',
    props<{status: boolean}>()
)

export const SetErrorMessage = createAction(
'[Error] error message',
props<{message: string}>()
)