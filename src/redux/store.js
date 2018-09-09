import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import api from './middlewares/api'


const store = createStore(reducer, composeWithDevTools(applyMiddleware(api)))

export default store
