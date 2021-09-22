import { combineReducers } from 'redux'
import userLogin from './slices/userLogin'
import requests from './slices/requests'

const rootReducer = combineReducers({
    requests,
    userLogin,
})

export type IStoreState = ReturnType<typeof rootReducer>
export default rootReducer
