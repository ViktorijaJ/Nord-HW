import React, { SyntheticEvent, useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()
        setLoginError('')
        await fetch('https://playground.tesonet.lt/v1/tokens', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                password,
            }),
        }).then((res) => {
            console.log(res)
            if (!res.ok) {
                setLoginError('Login failed, please try again')
            }
        })
    }

    return (
        <div>
            <form onSubmit={submit}>
                <h1>Please log in</h1>
                <input
                    placeholder="Username"
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            <div>{loginError}</div>
        </div>
    )
}

export default Login
