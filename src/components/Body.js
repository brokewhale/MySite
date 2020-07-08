import React from 'react';
import Intro from './Intro';
// import Addprojects from './AddProjects'
import AddProjects from './AddProjects';
import Skills from './Skills';
import Prof from './Prof';
// import webbackground from '../webbackground.png';
function Body() {
    return (
        <div className="body">
            <Intro />
            <AddProjects />
            <Skills />
            <Prof />

        </div>
    )
}

export default Body