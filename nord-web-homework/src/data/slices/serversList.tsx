import { ServersListDataModel } from '../../models/ServersListDataModel'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { SERVERS_LIST_API } from '../apiEndpoints'

const sliceName = 'serversLoginData'
const initialState: ServersListDataModel.State = {
    serversList: [],
}

const serversListDataThunk = createAsyncThunk(
    `${sliceName}/serversList`,
    async (userToken: string, { rejectWithValue }) => {
        try {
            const response = await fetch(SERVERS_LIST_API, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userToken}`,
                },
            })

            return await response.json()
        } catch (error) {
            rejectWithValue(error)
        }
    }
)

const serversList = createSlice({
    name: sliceName,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(serversListDataThunk.fulfilled, (state, action) => {
            state.serversList = action.payload
        })
    },
})

export default serversList.reducer
export { serversListDataThunk }
