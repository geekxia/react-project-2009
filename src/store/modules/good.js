import {GOOD_LIST} from '../actions'

let initState={
    goodData:{}
}
export default function reducer(state=initState, action) {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case GOOD_LIST:
        newState.goodData = action.payload
        break
        default:
    }
    return newState
    }