import React, { useState } from 'react';
import { FaLightbulb } from 'react-icons/fa';
import { GlobalStyles } from "../components/Globalstyle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../components/Themes"

// import myAvatar from '../img/myAvatar.png';
// import { Link } from 'react-router-dom'


function Navbar() {

    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
        console.log("clickde");

    }



    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyles />

                <div className={`header `}>


                    <div className='navbar'>


                        <div className="navbar_logo">
                            {/* <img src={myAvatar} alt="logo" /> */}
                        </div>

                        <div className='daflex'>

                            <ul className={`navbar_links  `}>

                                <li className='navbar_links-item' >
                                    < p className='navlink' data-text='ABOUT' >ABOUT</ p>
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