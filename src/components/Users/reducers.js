import {ADD_USER, ACTIVE_USER, DELETE_USER, UPDATE_USER, SELECT_FOR_UPDATE, CANCEL_UPDATING} from './actions'

export const users = (state = [], action) => {
    const { id, type } = action
    switch (type) {
        case ADD_USER:
            return [
                ...state,
                { ...action}
            ]

        case DELETE_USER:
            return state.filter(user => user.id !== id)
        
        
        case UPDATE_USER:
            let newState = state.filter(user => user.id !== id)
            return [
                ...newState,
                {...action}
            ]

    }
    return state
}

export const selectedUser = (state = {}, action) => {
    const { type} = action
    switch (type) {
        case ACTIVE_USER:
            return {
                ...action,
                readyForUpdate: false   
            }
        case SELECT_FOR_UPDATE:
            return {
                ...state,
                readyForUpdate: true
            }

        case CANCEL_UPDATING:
            return {
                ...state,
                readyForUpdate: false
            }

        case DELETE_USER:
            return {}
    }
    return state
}