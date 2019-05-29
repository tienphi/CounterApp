import { watchIncrementNumberAsync, watchDecrementNumberAsync, helloSaga } from './number_state/sagas'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementNumberAsync(),
        watchDecrementNumberAsync()
    ])
}