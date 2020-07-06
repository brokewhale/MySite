import React from 'react';
import './CSS/style.css'
//components
import Navbar from './components/Navbar';
import Body from './components/Body';
// import Body from './components/Body';
function Main() {
    return (
        <div className="main">
            <Navbar />
            <Body />

        </div>
    )
}

export default Main