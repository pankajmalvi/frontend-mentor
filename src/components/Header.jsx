import React, { useEffect, useState } from 'react'
import IconLogo from './IconLogo'
import IconMenuClose from './IconMenuClose';
import IconMenuOpen from './IconMenuOpen';

const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [menuToggle, setMenuToggle] = useState(true)
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
        <header className='main-header'>
            <div className="brand-logo">
                <IconLogo />
            </div>
            <nav className='nav-items'>
                {
                    isMobile ?
                        <button
                            className={`nav-menu ${menuToggle ? 'menu-close' : 'menu-open'}`}
                            onClick={() => setMenuToggle(prev => !prev)}>
                            {menuToggle ? <IconMenuOpen /> : <IconMenuClose />
                            }
                        </button>
                        : ''
                }


                <ul>
                    <li><a href="#">Home</a></li>
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