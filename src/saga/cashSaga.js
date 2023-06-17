import {put, takeEvery} from 'redux-saga/effects';
import {addCashAction, ASYNC_ADD_CASH, getCashAction, ASYNC_GET_CASH} from "../store/reducers/cashReducer";

export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

function* incrementCashWorker() {
    yield delay(1000);
    yield put(addCashAction(1));
}

function* decrementCashWorker() {
    yield delay(2000);
    yield put(getCashAction(1))
}

export function* cashWatcher() {
    yield takeEvery(ASYNC_ADD_CASH, incrementCashWorker)
    yield takeEvery(ASYNC_GET_CASH, decrementCashWorker)
}