import { combineReducers } from 'redux'
import userLogin from './slices/userLogin'
import requests from './slices/requests'
import serversList from './slices/serversList'

const rootReducer = combineReducers({
    requests,
    userLogin,
    serversList,
})

export type IStoreState = ReturnType<typeof rootReducer>
export default rootReducer
