import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Home.scss'
import ServersList from '../components/ServersList'

type Props = {
    userToken?: string
}
const Home: React.FC<Props> = ({ userToken }) => {
    return (
        <div>
            {!userToken ? (
                <div className="welcome-title">
                    <h1>Welcome!</h1>
                    <h1>
                        You have to <Link to="/login">login</Link> to reach page
                        content
                    </h1>
                </div>
            ) : (
                <ServersList userToken={userToken} />
            )}
        </div>
    )
}

export default Home
