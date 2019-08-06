import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import filtersReducer from "../reducers/filters";
import accountsReducer from "../reducers/accounts";
import checksReducer from "../reducers/checks";
import authReducer from "../reducers/auth";

const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            filters: filtersReducer,
            accounts: accountsReducer,
            checks: checksReducer,
            auth: authReducer
        }),
        componseEnhancers(applyMiddleware(thunk))
    );
    return store;
}
