import {combineReducers} from 'redux'
import { number } from '../state/number_state/reducers'

export const counterApp = combineReducers({
    number
})