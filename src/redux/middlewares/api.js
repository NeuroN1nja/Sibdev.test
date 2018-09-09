import axios from 'axios'
import { START, SUCCESS, FAIL } from '../actions'

export default store => next => action => {
    const { callAPI, type, ...rest } = action
    if (!callAPI) return next(action)

    next({
        ...rest, type: type + START
    })

    return axios.get(callAPI)
        .then(res => res.data)
        .then(data => next({ ...rest, type: type + SUCCESS, data }))
        .catch(error => next({ ...rest, type: type + FAIL, error }))

}