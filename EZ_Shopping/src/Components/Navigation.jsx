import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"



function Navigation() {
    const [isDark, setIsDark] = useState(false)
    const profile = useSelector((state) => state.user.profile)
    const navigate = useNavigate();

    return (
        <ThemeProvider theme={isDark ? themeDark : themeLight}>
            <NavContainer >
                <GlobalStyle />
                <div className='nav-left'>
                    <span onClick={() => navigate("/")}>EZ Shopping</span>
                </div>
                <div className='nav-right'>
                    <span onClick={() => navigate("/User")}>👱🏼‍♂️ {profile == null ? "User" : profile.firstName}</span>
                    <span onClick={() => navigate("/Basket")}>🛒 Basket</span>
                    <span onClick={() => setIsDark((prevMode) => !prevMode)}> {!isDark ? "⚫️ Dark" : "⚪️ Light"}  </span>
                </div>
            </NavContainer>
        </ThemeProvider>

    )
}

export default Navigation


const NavContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 100px;
background: #ffca2c;
color: black;
color: ${props => props.theme.navTheme};
background: ${props => props.theme.navTheme}
`

const GlobalStyle = createGlobalStyle`
body{
    color: ${props => props.theme.primaryColor};
    background: ${props => props.theme.primaryBackground}
}
button{
    color: ${props => props.theme.primaryColor};
    background: ${props => props.theme.primaryBackground}
}

`

const themeLight = {
    primaryColor: "black",
    primaryBackground: "white",
    navBackground: "#ffca2c",
    navColor: "black"
}

const themeDark = {
    primaryColor: "white",
    primaryBackground: "#282A3A",
    navBackground: "grey",
    navColor: "black"
}
