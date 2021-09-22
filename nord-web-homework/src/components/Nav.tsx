import React, { SyntheticEvent } from 'react'
import { Link } from 'react-router-dom'
import { userLoginDataReset } from '../data/slices/userLogin'
import { useAppDispatch } from '../common/hooks'

type Props = {
    userToken?: string
}

const Nav: React.FC<Props> = ({ userToken }) => {
    const dispatch = useAppDispatch()

    const logout = () => {
        dispatch(userLoginDataReset())
    }
    return (
        <nav>
            <ul className="menu-list">
                <li className="menu-list-item">
                    <Link to="/">HOME</Link>
                </li>
                {userToken ? (
                    <li className="menu-list-item">
                        <Link to="/" onClick={logout}>
                            LOGOUT
                        </Link>
                    </li>
                ) : (
                    <li className="menu-list-item">
                        <Link to="/login">LOGIN</Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Nav
