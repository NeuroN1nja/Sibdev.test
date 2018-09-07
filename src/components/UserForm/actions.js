export const ADD_USER = 'ADD_USER'

let nextId = 0;

export function addUser(user) {
    const { name, lastname, about, city } = user
    return {
        type: ADD_USER,
        id: nextId++,
        name,
        lastname,
        about,
        city
    }
}