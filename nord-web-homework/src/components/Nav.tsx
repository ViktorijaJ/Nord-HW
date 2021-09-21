import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <ul className="menu-list">
                <li className="menu-list-item">
                    <Link to="/">HOME</Link>
                </li>
                <li className="menu-list-item">
                    <Link to="/login">LOGIN</Link>
                </li>
                <li className="menu-list-item">
                    <Link to="/">LOGOUT</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav