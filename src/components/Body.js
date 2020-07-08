import React from 'react';
import Intro from './Intro';
// import Addprojects from './AddProjects'
import AddProjects from './AddProjects';
import Skills from './Skills';
import Prof from './Prof';
import Footer from './Footer';
// import webbackground from '../webbackground.png';
function Body() {
    return (
        <div className="body">
            <Intro />
            <AddProjects />
            <Skills />
            <Prof />
            <Footer />

        </div>
    )
}

export default Body