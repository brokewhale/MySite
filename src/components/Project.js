import React from 'react';
// import face from '../img/face.jpg';
import { FaAngleRight } from 'react-icons/fa';


function Project({ image, name, imgincase }) {


    return (
        <div className={`project `}
        >
            <div className="project__img" >
                <img src={image} alt="Homepage" />


            </div>
            <div className="project__info">
                <div className="project__info-name">
                    <span>
                        {name} {imgincase}
                    </span>
                </div>
                <button className="project__info-btn"> <FaAngleRight className='rig' />
                </button>

            </div>

        </div>
    )
}

export default Project