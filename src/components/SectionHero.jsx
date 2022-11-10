import React from 'react'

const SectionHero = () => {
    return (
        <div className="hero-section">
            <h1 className="hero-heading">
                We're
                coming
                soon
            </h1>
            <div className="hero-description">
                Hello fellow shoppers! We're currently building our new fashion store.
                Add your email below to stay up-to-date with announcements and our launch deals.
            </div>
            <form>
                <input type="email" placeholder='Email Address' />
                <button type="submit">{'>'}</button>
            </form>
        </div>
    )
}

export default SectionHero