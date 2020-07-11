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
                                <h2 className='modalinfo_title'>About Me</h2>
                                <p className="mobileinfo_text">
                                    I'm Yusuf Kehinde Hussein, a freelance front-end developer and designer based in Lagos, Nigeria.

                                    I build websites, develop web and mobile applications and I do design, for over 3 years.

                                    I started out working as a creative developer in Touchcore Ltd, doing designs. My passion for semantics, analytical correlation and psychologial user patterns built the foundation of my strongly UX centered approach in design and development

                                    I enjoy a good cup of coffee, watching good movies and tv shows, playing video-games and listening to music.

                                    Actually for hire.
                            </p>
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
                                    < p className='navlink' data-text='PORTFOLIO' >PORTFOLIO</ p>
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