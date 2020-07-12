import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import myAvatar from '../img/myAvatar.png';




// import styled from "styled-components";

function Intro() {

    //Modals

    const [open, setOpen] = useState(false);

    const onOpenModal = () => {
        setOpen(!open);
    };


    return (


        <div className="intro">

            <h1 className='intro__title'>Frontend Developer</h1>
            <p className="intro__info">
                Hello, I'm Yusuf Kehinde, a front-end developer,
                I build websites, develop web and mobile applications.
            </p>
            <button className='intro__btn' onClick={onOpenModal}>ABOUT ME</button>
            {/* <button onClick={themeToggler}>Switch Theme</button> */}
            <Modal open={open} onClose={onOpenModal} >
                <div className="modal__grid">

                    <div className="modalinfo">
                        <h2 className='modalinfo_title'>Hi! i'm Hussein  <span role="img" aria-label="wave hand"> 👋</span>  </h2>

                        <p > I'm Yusuf Kehinde Hussein, front-end developer and an Hardware Engineer based in Ogun Sate, Nigeria.</p>
                        <p > I am a hard working and dedicated developer witha keen eye for detail, and determination to deliver the best quality.</p>

                        <p > The main areas of my experties are HTML(5), CSS(3), SCSS and JavaScript (vanilal and React).</p>

                        <p > I sepcialise in responsive web design (RWD) and i use version control systems (GIT) to maintain my code.</p>
                        <p> I am also an Hardware developer with goal of building and developing of well optimized and cost efficient project.
                        I have developed skills in hardware development with MATLAB, Python, C programming language, Embeded System design and Circuit design.
            </p>
                        <p > <strong> Intrested in working with me?</strong> <a href="mailto:yusufkehinde11@mail.com">Get in Touch</a> and i'd be happy to talk to you.</p>

                    </div>
                    <div className="modalimg">
                        <img src={myAvatar} alt="avatar" />
                    </div>
                </div>
            </Modal>

        </div>

    )
}
export default Intro