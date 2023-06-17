import {all} from 'redux-saga/effects';
import {cashWatcher} from "./cashSaga";
import {fetchCustomersWatcher} from "./customerSaga";

export function* rootWatcher(){
    yield all([cashWatcher(), fetchCustomersWatcher()]);
}