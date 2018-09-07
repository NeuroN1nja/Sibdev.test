import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {users} from '../components/UserForm/reducers'

let defaultState = {}

export default combineReducers({
    form: formReducer,
    users
})
