import React from 'react';
import Intro from './Intro';
// import Addprojects from './AddProjects'
import AddProjects from './AddProjects';
import Skills from './Skills';
// import webbackground from '../webbackground.png';
function Body() {
    return (
        <div className="body">
            <Intro />
            <AddProjects />
            <Skills />

        </div>
    )
}

export default Body