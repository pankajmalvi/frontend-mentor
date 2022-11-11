import React from 'react'
import IconLogo from './IconLogo'

const Header = () => {
    return (
        <header className='main-header'>
            <div className="brand-logo">
                <IconLogo />
            </div>
            <nav className='nav-items'>
                <ul>
                    <li><a href="#">
                        Home
                    </a>
                    </li>
                    <li><a href="#">New</a></li>
                    <li><a href="#">Popular</a></li>
                    <li><a href="#">Trending</a></li>
                    <li><a href="#">Categories</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header