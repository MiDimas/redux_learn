import {cashReducer} from "./reducers/cashReducer";
import {customerReducer} from "./reducers/customerReducer";
import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga"
import {rootWatcher} from "../saga";


const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    cash: cashReducer,
    customer: customerReducer
});

export const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)))

sagaMiddleware.run(rootWatcher)