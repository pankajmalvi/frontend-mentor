import React from 'react'
import IconLogo from './IconLogo'

const Header = () => {
    return (
        <header>
            <div className="navbar">

                <div className="brand-logo">
                    <IconLogo fill="#2D314D" />
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
            </div>

        </header>
    )
}

export default Header