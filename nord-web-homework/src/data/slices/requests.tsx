import { createSlice } from '@reduxjs/toolkit'

type RequestsState = { [key: string]: boolean | '' }

const sliceName = 'requests'

const resetActionName = 'reset'
const pendingPrefix = 'isPending'
const errorSuffix = 'Error'

const initialState: RequestsState = {}

const capitalizeWord = (word: string) =>
    word.charAt(0).toUpperCase() + word.slice(1)

const reports = createSlice({
    name: sliceName,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addDefaultCase((state, action) => {
            const [slice, actionName, actionState] = action.type.split('/')

            if (!actionState) {
                if (actionName === resetActionName) {
                    const stateKeys = Object.keys(state)

                    stateKeys.forEach((key) => {
                        if (
                            key.startsWith(
                                `${pendingPrefix}${capitalizeWord(slice)}`
                            )
                        ) {
                            state[key] = false
                        }
                        if (
                            key.startsWith(slice) &&
                            key.endsWith(errorSuffix)
                        ) {
                            state[key] = ''
                        }
                    })
                }
                return
            }

            const actionKey = `${slice}${capitalizeWord(actionName)}`
            const pendingKey = `${pendingPrefix}${capitalizeWord(actionName)}`
            const errorKey = `${actionKey}${errorSuffix}`

            state[pendingKey] = actionState === 'pending'
            state[errorKey] =
                actionState === 'rejected'
                    ? action.payload ?? action.error
                    : null
        })
    },
})

export default reports.reducer
