import React from 'react';
import { FaLinkedinIn, FaTwitter, FaGithub, FaCodepen, FaPhone, FaCopyright } from 'react-icons/fa';


function Footer() {
    return (
        <footer className='footer'>
            <div className="footer__icon">
                <a href="www.linkedin.com/in/yusufkehinde11" className='icon'><FaLinkedinIn className='icon' /></a>
                <a href="https://twitter.com/Kool_Kage" className='icon'><FaTwitter className='icon' /></a>
                <a href="mailto:yusufkehinde11@gmail.com" className='icon'><FaPhone className='icon' /></a>
                <a href="https://github.com/RankedDev" className='icon'><FaGithub className='icon' /></a>
                <a href="https://codepen.io/rankeddev" className='icon'><FaCodepen className='icon' /></a>



            </div>
            <div className="footer__copy">
                <span> <FaCopyright className='copy' />2020 YUSUF KEHINDE</span>
                <a href='mailto:yusufkehinde11@gmail.com' target="_blank" rel="noopener noreferrer" className='email-link'> yusufkehinde11@gmail.com</a>
            </div>
        </footer>
    )
}
export default Footer