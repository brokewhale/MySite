import React from 'react';
import Intro from './Intro';
import AddProjects from './AddProjects';
import Skills from './Skills';
import Prof from './Prof';
import Footer from './Footer';


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