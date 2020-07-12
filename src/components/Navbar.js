import React, { useState } from 'react';
import { FaLightbulb } from 'react-icons/fa';
import { GlobalStyles } from "../components/Globalstyle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../components/Themes"
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import myAvatar from '../img/myAvatar.png';


// import myAvatar from '../img/myAvatar.png';
// import { Link } from 'react-router-dom'


function Navbar() {

    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
        console.log("clickde");

    }
    // const [pro, setPro]

    const goPro = () => {
        const anchor = document.querySelector('#pro')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    //Modals

    const [open, setOpen] = useState(false);

    const onOpenModal = () => {
        setOpen(!open);
    };


    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyles />

                <div className={`header `}>
                    <Modal open={open} onClose={onOpenModal} top>
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


                    <div className='navbar'>


                        <div className="navbar_logo">
                            {/* <img src={myAvatar} alt="logo" /> */}
                        </div>

                        <div className='daflex'>

                            <ul className={`navbar_links  `}>

                                <li className='navbar_links-item' >
                                    < p className='navlink' data-text='ABOUT' onClick={onOpenModal}>ABOUT</ p>
                                </li>
                                <li className='navbar_links-item'>
                                    <a href="#pro">< p className='navlink' data-text='WORKS' onClick={goPro} >WORKS</ p></a>
                                </li>
                                <li className='navbar_links-item'>
                                    < p className='navlink' data-text='CONTACT' >CONTACT</ p>
                                </li>





                            </ul>
                            <div className="darkmode" onClick={themeToggler}>
                                <FaLightbulb className='darkmode_icon' />
                            </div>
                        </div>



                    </div>

                </div>
            </>
        </ThemeProvider>
    )
}
export default Navbar