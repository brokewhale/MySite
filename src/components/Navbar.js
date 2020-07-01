import React from 'react'
function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar_logo">
                    RankedDev
                </div>

                <ul className="navbar_links">
                    <li className='navbar_links-item'>
                        <a className='navlink' href="kenny.com">ABOUT</a>
                    </li>
                    <li className='navbar_links-item'>
                        <a className='navlink' href="kenny.com">PORTFOLIO</a>
                    </li>
                    <li className='navbar_links-item'>
                        <a className='navlink' href="kenny.com">SERVICES</a>
                    </li>
                    <li className='navbar_links-item'>
                        <a className='navlink' href="kenny.com">CONTACT</a>
                    </li>
                </ul>

            </nav>
        </div>
    )
}
export default Navbar