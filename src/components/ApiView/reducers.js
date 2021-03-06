import { GET_DATA } from './actions'
import { START, SUCCESS } from '../../redux/actions'


let defaultState = {
    loading: false,
    data: {}
}

export function allData(state = defaultState, action) {
    switch (action.type) {
        case GET_DATA + START:
            return {
                loading: true
            }

        case GET_DATA + SUCCESS:
            return {
                loading: false,
                [action.value]: action.data
            }
        default:
            return state
    }
}