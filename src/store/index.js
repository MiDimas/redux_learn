import {cashReducer} from "./reducers/cashReducer";
import {customerReducer} from "./reducers/customerReducer";
import {combineReducers, legacy_createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    cash: cashReducer,
    customer: customerReducer
});

export const store = legacy_createStore(rootReducer, composeWithDevTools())