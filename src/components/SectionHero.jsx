import React from 'react'
import IconArrow from './IconArrow'


const SectionHero = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1 className="hero-heading">
                    We're
                    coming
                    soon
                </h1>
                <p className="hero-description">
                    Hello fellow shoppers! We're currently building our new fashion store.
                    Add your email below to stay up-to-date with announcements and our launch deals.
                </p>
                <form>
                    <input type="email" placeholder='Email Address' />
                    <button type="submit"><IconArrow /></button>
                </form>
            </div>
            <div className="hero-image-container"></div>
        </div>
    )
}

export default SectionHero