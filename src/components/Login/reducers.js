import { LOGIN } from './actions'

export const logged = (state = false, action) => {
    switch (action.type) {
        case LOGIN:
            return true
        default:
            return state
    }
}