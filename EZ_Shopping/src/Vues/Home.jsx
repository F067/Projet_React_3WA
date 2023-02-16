import React from 'react'
import Items from '../Components/Items'
import Navigation from "../Components/Navigation"

function Home() {
    return (
        <div >
            <div>
                    <Navigation />
            </div>
            <div>
                <Items />
            </div>
        </div>
    )
}

export default Home