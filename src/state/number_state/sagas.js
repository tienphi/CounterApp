import {put, takeLatest} from 'redux-saga/effects'
import { ActionTypes } from '..';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export function* helloSaga(){
    console.log('Hello World!')
}

function* incrementNumberAsync(){
    yield delay(1000)
    yield put({type: ActionTypes.INCREMENT})
}

export function* watchIncrementNumberAsync(){
    yield takeLatest(ActionTypes.INCREMENT_ASYNC, incrementNumberAsync)
}

function* decrementNumberAsync(){
    yield delay(1000)
    yield put({type: ActionTypes.DECREMENT})
}

export function* watchDecrementNumberAsync(){
    yield takeLatest(ActionTypes.DECREMENT_ASYNC, decrementNumberAsync)
}