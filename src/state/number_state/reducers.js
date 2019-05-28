import { ActionTypes } from "..";

export function number(state = 0, action) {
    switch (action.type) {
        case ActionTypes.INCREMENT: {
            return state + 1
        }
        case ActionTypes.DECREMENT: {
            return state - 1
        }
        default:
            return state
    }
}