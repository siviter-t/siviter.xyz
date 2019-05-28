import { Action } from "redux";

export interface AppAction<T> extends Action<string> {
    reducerAction: string;
    payload: T;
}
