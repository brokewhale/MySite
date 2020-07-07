import React from 'react';
import Project from './Project';
import Homepage from '../img/Homepage.png';
import dark from '../img/dark.png';
import insure from '../img/insure.png';


function AddProjects() {
    return (
        <div className='addproject'>
            <p className='feat'>Featured Projects</p>
            <Project
                image={Homepage}
                name='MyHotel'
            />
            <Project
                image={dark}
                name='Dark'
            />
            <Project
                image={insure}
                name='Insure'
            />
        </div>

    )
}
export default AddProjects