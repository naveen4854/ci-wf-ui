import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import { reducer as reduxFormReducer } from 'redux-form';
import thunk from "redux-thunk";

import { AuthenticationReducer } from "src/authentication/authentication.reducer";

const rootReducer = combineReducers({
    form: reduxFormReducer,
    user: AuthenticationReducer
});

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const enhancers = [];
if (process.env.NODE_ENV !== "production") {
    const devToolsExtension = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const store = createStore(rootReducer, {}, compose(applyMiddleware(thunk), ...enhancers));

export default store;