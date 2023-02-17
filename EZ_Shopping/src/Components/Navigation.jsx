import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import { userTheme } from '../store/userSlice';



function Navigation() {
    const [isDark, setIsDark] = useState(false)

    const navigate = useNavigate();

    const dispatch = useDispatch()
    const profile = useSelector((state) => state.user.profile)
    const themeMode = useSelector((state) => state.user.themeMode)
    const basket = useSelector((state) => state.basket.orders);


    useEffect(() => {
        if (themeMode) {
            let mode = {
                theme: isDark
            }
            dispatch(userTheme(mode))
        }
    }, [isDark])


    const global_qty = basket.reduce(function (accumulateur, valeurCourante) {
        return accumulateur + valeurCourante.quantity;
    }, 0);


    const handleMode = () => {
        setIsDark(isDark ? false : true)
        dispatch(userTheme(isDark))
    }



    return (
        <ThemeProvider theme={!themeMode === false ? themeDark : themeLight}>
            <NavContainer >
                <GlobalStyle />
                <div className='nav-left'>
                    <span onClick={() => navigate("/")}>EZ Shopping</span>
                </div>
                <div className='nav-right'>
                    <span onClick={() => navigate("/User")}>👱🏼‍♂️ {!profile ? "user" : profile.firstName}</span>
                    <span onClick={() => navigate("/Basket")}>🛒 {global_qty} Items</span>
                    <span onClick={handleMode}> {isDark ? "⚫️ Dark" : "⚪️ Light"}  </span>
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

color: ${props => props.theme.navColor};
background: ${props => props.theme.navBackground}
`

const GlobalStyle = createGlobalStyle`
body{
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
    primaryBackground: "#144272",
    navBackground: "#0A2647",
    navColor: "black"
}
