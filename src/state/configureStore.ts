import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { AppState, appReducer } from "state/AppState";

export function configureStore(preloadedState: AppState) {
    const composedEnhancers = composeWithDevTools();

    const store = createStore(appReducer, preloadedState, composedEnhancers);

    return store;
}
