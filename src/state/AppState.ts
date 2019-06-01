import { AppAction } from "state/AppAction";
import { isOfReducerAction } from "state/isOfType";
import { LayoutState, layoutReducer, LayoutAction } from "state/components/LayoutState";

export interface AppState {
    layout: LayoutState;
}

export function appReducer<T>(state: AppState, action: AppAction<T>): AppState {
    if (isOfReducerAction(action, LayoutAction)) {
        return {
            ...state,
            layout: layoutReducer(state.layout, action)
        };
    }

    return state;
}
