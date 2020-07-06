import React from 'react';
import Intro from './Intro';
// import Addprojects from './AddProjects'
import AddProjects from './AddProjects';
// import webbackground from '../webbackground.png';
function Body() {
    return (
        <div className="body">
            <Intro />
            <AddProjects />

        </div>
    )
}

export default Body