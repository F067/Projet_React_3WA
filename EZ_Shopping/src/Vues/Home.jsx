import React from 'react'
import Items from '../Components/Items'
import Navigation from "../Components/Navigation"
import home from './Styles/home.css'

function Home() {
    return (
        <div >
            <Navigation />
            <div className='home-content'>
                <Items />
            </div>
        </div>
    )
}

export default Home