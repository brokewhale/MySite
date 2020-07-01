import React from 'react'
function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar_logo">
                    RankedDev
                </div>

                <ul className="navbar_links">
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">PORTFOLIO</a></li>
                    <li><a href="#">SERVICES</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>

            </nav>
        </div>
    )
}
export default Navbar