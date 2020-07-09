import React from 'react';
import { FaLightbulb } from 'react-icons/fa';

// import myAvatar from '../img/myAvatar.png';
// import { Link } from 'react-router-dom'


function Navbar() {



    return (
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
                    <div className="darkmode">
                        <FaLightbulb className='darkmode_icon' />
                    </div>
                </div>



            </div>

        </div>
    )
}
export default Navbar