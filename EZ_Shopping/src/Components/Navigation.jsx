import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
    return (
        <div>
            <h1>Navigation</h1>
            <NavLink to="/User">
                Go to User page
            </NavLink>
            <br />
            <NavLink to="/Basket">
                Go to Basket page
            </NavLink>
            <br />
            <NavLink to="/">
                Go to Home page
            </NavLink>
        </div>

    )
}

export default Navigation