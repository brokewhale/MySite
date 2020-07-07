import React from 'react';
import c1 from '../img/svgs/c1.svg'
import h1 from '../img/svgs/h1.svg'
import js1 from '../img/svgs/js1.svg'
import rea from '../img/svgs/rea.svg'
import eng from '../img/svgs/eng.svg'
import emb from '../img/svgs/emb.svg'



function Skills() {
    return (
        <div className="skills">
            <span className='ki'>SKILLS</span>
            <div className="skills__grid">
                <div className="skill">
                    <div className="skill__icon">
                        <img src={c1} alt="css" />
                    </div>
                    <span>CSS</span>
                </div>
                <div className="skill">
                    <div className="skill__icon">
                        <img src={h1} alt="html" />
                    </div>
                    <span>HTML</span>
                </div>
                <div className="skill">
                    <div className="skill__icon">
                        <img src={js1} alt="js" />
                    </div>
                    <span>JavaScript</span>
                </div>
                <div className="skill">
                    <div className="skill__icon">
                        <img src={rea} alt="react" />
                    </div>
                    <span>React</span>
                </div>
                <div className="skill">
                    <div className="skill__icon">
                        <img src={eng} alt="engineering" />
                    </div>
                    <span>Engineering</span>
                </div>
                <div className="skill">
                    <div className="skill__icon">
                        <img src={emb} alt="engineering" />
                    </div>
                    <span>Embeded Systems</span>
                </div>

            </div>
        </div>
    )
}
export default Skills