import { ActionTypes } from "..";

function incrementNumber() {
    return {
        type: ActionTypes.INCREMENT,
    }
}

function decrementNumber() {
    return {
        type: ActionTypes.DECREMENT,
    }
}

export {
    incrementNumber,
    decrementNumber
}