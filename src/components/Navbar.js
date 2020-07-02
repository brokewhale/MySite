import React, { useState } from 'react'
// import { Link } from 'react-router-dom'


function Navbar() {
    const [open, setOpen] = useState(true);

    const handleOpen = () => {
        setOpen(!open)
    }



    return (
        <div className={`header ${open ? '' : 'open'}`}>
            <div className="menu" onClick={handleOpen}>
                <div className={`bar ${open ? '' : 'open'}`}></div>
            </div>

            <div className='navbar'>


                <div className="navbar_logo">
                    RankedDev
                </div>

                <ul className={`navbar_links ${open ? '' : 'open'}`}>
                    <li className={`navbar_links-item `}  >
                        < p className='navlink' data-text='ABOUT' >ABOUT</ p>
                    </li>
                    <li className={`navbar_links-item `} >
                        < p className='navlink' data-text='PORTFOLIO' >PORTFOLIO</ p>
                    </li>
                    <li className={`navbar_links-item `} >
                        < p className='navlink' data-text='SERVICES' >SERVICES</ p>
                    </li>
                    <li className={`navbar_links-item `} >
                        < p className='navlink' data-text='CONTACT' >CONTACT</ p>
                    </li>



                </ul>


            </div>
        </div>
    )
}
export default Navbar