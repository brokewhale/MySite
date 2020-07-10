import React from 'react';
import c1 from '../img/svgs/c1.svg'
import h1 from '../img/svgs/h1.svg'
import js1 from '../img/svgs/js1.svg'
import rea from '../img/svgs/rea.svg'
// import eng from '../img/svgs/eng.svg'
import emb from '../img/svgs/emb.svg'
import { FaTools } from 'react-icons/fa';




function Skills() {
    return (
        <div className="skills">
            <span className='ki'>SKILLS</span>
            <div className="skills__grid">
                <div className="skill">
                    <div className="skill__icon">
                        <img src={c1} alt="css" />
                    </div>
                    <span className='skillname'>CSS</span>
                </div>
                <div className="skill">
                    <div className="skill__icon">
                        <img src={h1} alt="html" />
                    </div>
                    <span className='skillname'>HTML</span>
                </div>
                <div className="skill">
                    <div className="skill__icon">
                        <img src={js1} alt="js" />
                    </div>
                    <span className='skillname'>JavaScript</span>
                </div>
                <div className="skill">
                    <div className="skill__icon ">
                        <img src={rea} alt="react" className='rea' />
                    </div>
                    <span className='skillname'>React</span>
                </div>
                <div className="skill">
                    <div className="skill__icon">
                        {/* <img src={eng} alt="engineering" /> */}
                        <FaTools className='eng-icon' />

                    </div>
                    <span className='skillname'>Engineering</span>
                </div>
                <div className="skill">
                    <div className="skill__icon">
                        <img src={emb} alt="engineering" />

                    </div>
                    <span className='skillname'>Embeded Systems</span>
                </div>

            </div>
        </div>
    )
}
export default Skills