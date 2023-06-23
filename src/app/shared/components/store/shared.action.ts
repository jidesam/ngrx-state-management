import { createAction, props } from "@ngrx/store";

export const sharedLoadingSpinner = createAction(
    '[shared state] set loading spinner',
    props<{status: boolean}>()
)