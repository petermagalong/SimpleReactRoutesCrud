import React from 'react'
import {useHistory} from 'react-router-dom'

const Home = () => {

    const History = useHistory()

    const HandleOnClick = () => {
        History.push("/todolist")
    }
    return(
        <div className="home-main">
            <h1>Welcome to todolist</h1>
            <button onClick={HandleOnClick}>Start now!</button>
        </div>
    )
}

export default Home


