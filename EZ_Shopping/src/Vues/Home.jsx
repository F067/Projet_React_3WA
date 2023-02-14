import React from 'react'
import { NavLink } from 'react-router-dom'
import Navigation from "../Components/Navigation"

function Home() {
    return (
        <div>
            <Navigation/>
            <h1>Home</h1>
            <NavLink to="/Details">
                Go to Details page
            </NavLink>
        </div>
    )
}

export default Home