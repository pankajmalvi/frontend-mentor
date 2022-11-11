import React from 'react'
import IconFacebook from './IconFacebook'
import IconInstagram from './IconInstagram'
import IconLogo from './IconLogo'
import IconPinterest from './IconPinterest'
import IconTwitter from './IconTwitter'
import IconYoutube from './IconYoutube'

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="brand-container">
                    <div className="brand-logo">
                        <IconLogo />
                    </div>
                    <ul className="social-media">
                        <li><a href="#"><IconFacebook /></a></li>
                        <li><a href="#"><IconYoutube /></a></li>
                        <li><a href="#"><IconTwitter /></a></li>
                        <li><a href="#"><IconPinterest /></a></li>
                        <li><a href="#"><IconInstagram /></a></li>
                    </ul>
                </div>
                <ul className="footer-nav">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>

                <div className="footer-other">
                    <button className="footer-btn">
                        Request Invite
                    </button>
                    <p className="copyright-text">
                        © Easybank. All Rights Reserved
                    </p>
                </div>
            </div>
            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="https://pankajmalviya.netlify.app/" target="_blank">Pankaj Malviya</a>.
            </div>
        </footer>
    )
}

export default Footer