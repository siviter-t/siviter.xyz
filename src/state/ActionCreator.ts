import { AppAction } from "state/AppAction";

export interface ActionCreator<T> {
    reducerAction: string;
    type: string;
    (payload: T): AppAction<T>;
}

export function actionCreator<T>(reducerAction: string, type: string): ActionCreator<T> {
    return (Object.assign((payload: T) => ({ reducerAction, type, payload }), {
        reducerAction,
        type
    }) as any) as ActionCreator<T>;
}
