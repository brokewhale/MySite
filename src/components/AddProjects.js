import React from 'react';
import Project from './Project';
import Homepage from '../img/Homepage.png';
import dark from '../img/dark.png';
import quote from '../img/quote.png';
import weather from '../img/weather.png';
import { FaReact, FaGithub } from 'react-icons/fa';




function AddProjects() {
    return (
        <div className='addproject' id='pro'>
            <p className='feat'>Featured Projects. <span className='more'><a href="https://github.com/RankedDev">more on <FaGithub className='darkmode_icon' /></a></span></p>
            <div className="addproject__grid">

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
                <a href="https://mysimplereactquotegenerator.netlify.app/">

                    <Project
                        image={quote}
                        name={"Random Quote Generator"}
                        imgincase={<FaReact className='imgincase' />}
                    />
                </a>

                <a href="https://reactmobileweatherapp.netlify.app/">

                    <Project
                        image={weather}
                        name='Mobile weather App'
                        imgincase={<FaReact className='imgincase' />}

                    />
                </a>
            </div>
        </div>

    )
}
export default AddProjects