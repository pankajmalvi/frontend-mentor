import React from 'react'
import IconLogo from './IconLogo'

const Header = () => {
    return (
        <header>
            <div className="brand-logo">
                <IconLogo />
            </div>
            <nav className='nav-links'>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>
            </nav>
            <button className='nav-btn'>Request Invite</button>
            <nav>

            </nav>
        </header>
    )
}

export default Header