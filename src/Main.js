import React, { useState, useEffect } from 'react';
import './CSS/style.css'
import Navbar from './components/Navbar';
import Body from './components/Body';
import Loader from './components/Loader';
function Main() {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);


    if (isLoading) {
        return (
            <Loader />
        )
    } else {

        return (
            <div className="main">
                <Navbar />
                <Body />

            </div>
        )
    }


}

export default Main