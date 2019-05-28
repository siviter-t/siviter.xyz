import { Action } from "redux";
import { AppAction } from "state/AppAction";
import { ActionCreator } from "state/ActionCreator";

export function isOfType<T>(action: Action, actionCreator: ActionCreator<T>): action is AppAction<T> {
    return action.type === actionCreator.type;
}

export function isOfReducerAction<T>(action: AppAction<T>, reducer: string) {
    return action.reducerAction === reducer;
}
