import React from 'react';
import Project from './Project';
import Homepage from '../img/Homepage.png';
import dark from '../img/dark.png';
import insure from '../img/insure.png';


function AddProjects() {
    return (
        <div className='addproject'>
            <p className='feat'>Featured Projects</p>
            <a href="https://myhotelk.netlify.app">

                <Project
                    image={Homepage}
                    name='MyHotel'
                />
            </a>
            <a href="https://rankedevdarklandingpage.netlify.app">

                <Project
                    image={dark}
                    name='Dark'
                />
            </a>
            <a href="https://rankedevinsure.netlify.app">

                <Project
                    image={insure}
                    name='Insure'
                />
            </a>
        </div>

    )
}
export default AddProjects