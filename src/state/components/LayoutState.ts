import { AppAction } from "state/AppAction";
import { actionCreator } from "state/ActionCreator";
import { isOfType } from "state/isOfType";
import { Theme } from "style/Theme";

export interface LayoutState {
    theme: Theme;
}

export const LayoutAction = "LayoutAction";

export const SetThemeAction = actionCreator<Theme>(LayoutAction, "SetThemeAction");

export function layoutReducer<T>(state: LayoutState, action: AppAction<T>): LayoutState {
    if (isOfType(action, SetThemeAction)) {
        return { ...state, theme: action.payload };
    }

    return state;
}
