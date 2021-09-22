import React, { SyntheticEvent, useState } from 'react'

import '../styles/Login.scss'
import { UserLoginDataModel } from '../models/UserLoginDataModel'
import { useAppDispatch, useShallowEqualSelector } from '../common/hooks'
import { userLoginDataThunk } from '../data/slices/userLogin'
import { useHistory } from 'react-router-dom'

type Props = {
    loginData?: UserLoginDataModel.UserData
}

const Login: React.FC<Props> = ({ loginData }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')
    const { isPendingUserLogin } =
        useShallowEqualSelector<UserLoginDataModel.RequestsState>(
            // @ts-ignore
            (state) => state.requests
        )

    const dispatch = useAppDispatch()
    const history = useHistory()

    React.useEffect(() => {
        if (loginData?.message) {
            setLoginError(loginData.message)
            setPassword('')
        }
        if (loginData?.token) {
            history.push('/')
        }
    }, [loginData])

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        const userLoginData: UserLoginDataModel.LoginData = {
            username,
            password,
        }

        dispatch(userLoginDataThunk(userLoginData))
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit} className="login-form">
                <h1>Please log in</h1>
                <div className="login-error-message">{loginError}</div>
                <input
                    placeholder="Username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="submit-btn">
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login
