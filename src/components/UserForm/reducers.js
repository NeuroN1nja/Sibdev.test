import {ADD_USER} from './actions'

export const users = (state = [], action) => {
    const {id, name, lastname, about, city, type} = action
    switch (type) {
        case ADD_USER:
            return [
                ...state,
                {
                    id,
                    name,
                    lastname,
                    about,
                    city
                }
            ]
    }
    return state
}