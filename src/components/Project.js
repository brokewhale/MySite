import React from 'react';
import face from '../img/face.jpg';
import { FaArrowRight } from 'react-icons/fa';


function Project() {
    return (
        <div className="project">
            <div className="project__img">
                <img src={face} alt="face" />

            </div>
            <div className="project__name">
                Weather
            </div>
            <button className="project__btn"> <FaArrowRight />
            </button>

        </div>
    )
}

export default Project