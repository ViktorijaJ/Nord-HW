import React from 'react'
import './styles/App.scss'
import Nav from './components/Nav'
import Login from './pages/Login'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'
import { useShallowEqualSelector } from './common/hooks'

const App: React.FC = () => {
    const data = useShallowEqualSelector((state) => state.userLogin.data)

    return (
        <div className="App">
            <BrowserRouter>
                <Nav userToken={data.token} />
                <main>
                    <Route
                        path="/"
                        exact
                        render={() => <Home userToken={data.token} />}
                    />
                    <Route
                        path="/login"
                        exact
                        render={() => <Login loginData={data} />}
                    />
                </main>
            </BrowserRouter>
        </div>
    )
}

export default App
