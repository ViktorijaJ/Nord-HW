import {
    AnyAction,
    configureStore,
    getDefaultMiddleware,
} from '@reduxjs/toolkit'

import rootReducer, { IStoreState } from './rootReducer'

const reducer = (state: IStoreState, action: AnyAction) =>
    rootReducer(
        action.type === 'activeProfile/logout' ? undefined : state,
        action
    )

const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
})

const store = configureStore({
    // @ts-ignore
    reducer,
    middleware,
    devTools: {
        name: 'Redux',
        trace: true,
        traceLimit: 25,
    },
})

export default store
export { middleware }
export type AppDispatch = typeof store.dispatch
