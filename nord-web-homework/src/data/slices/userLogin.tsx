import { UserLoginDataModel } from '../../models/UserLoginDataModel'
import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { LOGIN_URL } from '../apiEndpoints'

const sliceName = 'userLoginData'
const initialState: UserLoginDataModel.State = {
    data: {
        token: '',
        message: '',
    },
}

const userLoginDataThunk = createAsyncThunk(
    `${sliceName}/userLogin`,
    async (userData: UserLoginDataModel.LoginData, { rejectWithValue }) => {
        try {
            const response = await fetch(LOGIN_URL, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(userData),
            })

            return await response.json()
        } catch (error) {
            rejectWithValue(error)
        }
    }
)

const userLoginDataReset = createAction(`${sliceName}/userLogin/reset`)

const userLogin = createSlice({
    name: sliceName,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userLoginDataThunk.fulfilled, (state, action) => {
            // @ts-ignore
            state.data = action.payload
        })
        builder.addCase(userLoginDataReset, (state) => {
            state.data = initialState.data
        })
    },
})

export default userLogin.reducer
export { userLoginDataThunk, userLoginDataReset }
