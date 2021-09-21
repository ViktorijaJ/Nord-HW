import React from 'react'
import './styles/App.scss'
import Nav from './components/Nav'
import Login from './pages/Login'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'

const App: React.FC = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav />
                <main>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                </main>
            </BrowserRouter>
        </div>
    )
}

export default App
