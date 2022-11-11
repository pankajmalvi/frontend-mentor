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
                    <li>Home</li>
                    <li>New</li>
                    <li>Popular</li>
                    <li>Trending</li>
                    <li>Categories</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header