import React, { useEffect, useState } from 'react'
import IconHamburger from './IconHamburger';
import IconClose from './IconClose';
import IconLogo from './IconLogo'

const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [navOpen, setNavOpen] = useState(true)

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

    return (
        <header>
            <div className="navbar">

                <div className="brand-logo">
                    <IconLogo fill="#2D314D" />
                </div>
                <nav className={isMobile ? 'nav-links-mobile' : 'nav-links'}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </nav>
                {isMobile ?
                    <button
                        className={navOpen ? "nav-close" : "nav-open"}
                        onClick={() => setNavOpen(prev => !prev)}>
                        {
                            navOpen ?
                                <IconHamburger />
                                : <IconClose />
                        }
                    </button>
                    :
                    <button className='nav-btn'>Request Invite</button>
                }
            </div>

        </header>
    )
}

export default Header