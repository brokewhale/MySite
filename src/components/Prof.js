import React from 'react';
// import dev from '..//img/dev.png';
// import eng from '../img/svgs/eng.svg'
import { FaCode, FaTools } from 'react-icons/fa';

function Prof() {
    return (
        <div className="prof">
            <h1 className='prof__title'>WHAT I DO</h1>
            <div className="prof__grid">
                <div className="prof__grid_icon">
                    {/* <img src={dev} alt="development" /> */}
                    <FaCode className='code-icon' />
                </div>
                <div className="prof__grid_details">
                    <h3 className="prof__grid_details-title">Development</h3>
                    <p className="prof__grid_details-info">Websites, web applications, mobile applications,
                        e-commerce solutions and front-end development.</p>
                </div>
            </div>

            <div className="prof__grid">
                <div className="prof__grid_icon">
                    {/* <img src={eng} alt="engineering" /> */}
                    <FaTools className='code-icon' />


                </div>
                <div className="prof__grid_details">
                    <h3 className="prof__grid_details-title">Engineering</h3>
                    <p className="prof__grid_details-info">Hardware development, PCB making, Circuit Design
                    Embeded Systems and Internet of Things(IOT)</p>
                </div>
            </div>
        </div>
    )
}
export default Prof