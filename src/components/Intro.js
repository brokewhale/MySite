import React from 'react';
import Modal from "./Modal";
import useModal from '../components/useModal';






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
                <Modal
                    isShowing={isShowing}
                    hide={toggle}
                />

            </div>
        </>

    )
}
export default Intro