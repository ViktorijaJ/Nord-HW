import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    userToken?: string
}
const Home: React.FC<Props> = ({ userToken }) => {
    return (
        <div>
            <h1>Welcome!</h1>
            {!userToken && (
                <h1>
                    You have to <Link to="/login">login</Link> to reach page
                    content
                </h1>
            )}
            <h1>{userToken}</h1>
        </div>
    )
}

export default Home
