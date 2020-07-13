import React from 'react';
// import 'react-responsive-modal/styles.css';
// import { Modal } from 'react-responsive-modal';
// import myAvatar from '../img/myAvatar.png';
import Modal from "./Modal";
import useModal from '../useModal';




// import styled from "styled-components";

function Intro() {

    const { isShowing, toggle } = useModal();






    return (

        <>
            <div ></div>
            <div className="intro">

                <h1 className='intro__title'>Frontend Developer</h1>
                <p className="intro__info">
                    Hello, I'm Yusuf Kehinde, a front-end developer,
                    I build websites, develop web and mobile applications.
            </p>
                <button className='intro__btn' onClick={toggle} >ABOUT ME</button>
                {/* <button onClick={themeToggler}>Switch Theme</button> */}
                <Modal
                    isShowing={isShowing}
                    hide={toggle}
                />

            </div>
        </>

    )
}
export default Intro