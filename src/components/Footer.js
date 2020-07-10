import React from 'react';
import { FaLinkedinIn, FaTwitter, FaGithub, FaCodepen, FaPhone, FaCopyright } from 'react-icons/fa';


function Footer() {
    return (
        <footer className='footer'>
            <div className="footer__icon">
                <FaLinkedinIn className='icon' />
                <FaTwitter className='icon' />
                <FaPhone className='icon' />
                <FaGithub className='icon' />
                <FaCodepen className='icon' />


            </div>
            <div className="footer__copy">
                <span> <FaCopyright className='copy' />2020 YUSUF KEHINDE</span>
                <a href='mailto:yusufkehinde11@gmail.com' target="_blank" rel="noopener noreferrer"> yusufkehinde11@gmail.com</a>
            </div>
        </footer>
    )
}
export default Footer