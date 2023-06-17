import {put, call, takeEvery} from 'redux-saga/effects';
import {addManyCustomersAction, ASYNC_ADD_CUSTOMERS} from "../store/reducers/customerReducer";

const fetchCustomersFromAPI = () => fetch('https://jsonplaceholder.typicode.com/users/');

function* fetchCustomersWorker() {
    const data = yield call(fetchCustomersFromAPI);
    const json = yield call(() => new Promise(resolve => resolve(data.json())));
    yield put(addManyCustomersAction(json));
}

export function* fetchCustomersWatcher() {
    yield takeEvery(ASYNC_ADD_CUSTOMERS, fetchCustomersWorker);
}