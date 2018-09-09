export const ADD_USER = 'ADD_USER'
export const ACTIVE_USER = 'ACTIVE_USER'
export const DELETE_USER = 'DELETE_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const SELECT_FOR_UPDATE = 'SELECT_FOR_UPDATE'
export const CANCEL_UPDATING = 'CANCEL_UPDATING'

let nextId = 0;

export function addUser(user, cards) {
    const { name, lastname, about, city } = user
    return {
        type: ADD_USER,
        id: nextId++,
        name,
        lastname,
        about,
        city,
        cards
    }
}

export function activeUser(user) {
    const { name, lastname, about, city, id, cards } = user
    return {
        type: ACTIVE_USER,
        id,
        name,
        lastname,
        about,
        city,
        cards
    }
}

export function deleteUser(id) {
    return {
        type: DELETE_USER,
        id
    }
}

export function selectForUpdate() {
    return {
        type: SELECT_FOR_UPDATE
    }
}

export function cancelUpdating() {
    return {
        type: CANCEL_UPDATING
    }
}

export function updateUser(user) {
    const { name, lastname, about, city, id, cards } = user
    return {
        type: UPDATE_USER,
        id,
        name,
        lastname,
        about,
        city,
        readyForUpdate: false,
        cards
    }
}