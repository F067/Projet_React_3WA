import React from 'react'
import { NavLink } from 'react-router-dom'
import Navigation from '../Components/Navigation'

function Details() {
    return (
        <div>
            <Navigation />
            <h1>Details</h1>
            <NavLink to="/">
                Go to Home page
            </NavLink>

        </div>
    )
}

export default Details