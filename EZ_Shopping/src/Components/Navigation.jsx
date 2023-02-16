import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';


function Navigation() {
    const [isDark, setIsDark] = useState(false)
    const profile = useSelector((state) => state.user.profile)
    const navigate = useNavigate();

    const handleMode = () => {
        setIsDark(true)
    }

    return (
        <div>
            <div className='NavBar-container'>
                <div className='nav-left'>
                    <span onClick={() => navigate("/")}>EZ Shopping</span>
                </div>
                <div className='nav-right'>
                    <span onClick={() => navigate("/User")}>👱🏼‍♂️ {profile == null ? "User" : profile.firstName}</span>
                    <span onClick={() => navigate("/Basket")}>🛒 Basket</span>
                    <span onClick={handleMode}> {isDark ? "⚫️ Dark" : "⚪️ Light"}  </span>
                </div>
            </div>
        </div>

    )
}

export default Navigation