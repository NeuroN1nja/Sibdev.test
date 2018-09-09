import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { users, selectedUser} from '../components/Users/reducers'
import { allData } from '../components/ApiView/reducers'
import { logged } from '../components/Login/reducers'

let defaultState = {}

export default combineReducers({
    form: formReducer,
    users,
    selectedUser,
    allData,
    logged
})
