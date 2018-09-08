import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { users, selectedUser} from '../components/UserForm/reducers'

let defaultState = {}

export default combineReducers({
    form: formReducer,
    users,
    selectedUser
})
