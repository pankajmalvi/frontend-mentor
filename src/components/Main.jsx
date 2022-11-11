import React from 'react'

const Main = () => {
    return (
        <main>
            <div className="news-heading-image">

            </div>
            <div className="heading-news-content">

                <h1 className="news-heading">
                    The Bright Future of Web 3.0?
                </h1>
                <div className="news-content">
                    <p className="head-news-description">
                        We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                        But is it really fulfilling its promise?
                    </p>
                    <button className="read-more-button">
                        Read more
                    </button>
                </div>
            </div>
            <div className="new-news-container">
                <header className="new-news-header">
                    New
                </header>

                <div className="new-news-items">
                    <div className="new-item">
                        Hydrogen VS Electric Cars
                        Will hydrogen-fueled cars ever catch up to EVs?
                    </div>
                    <div className="new-item">
                        The Downsides of AI Artistry
                        What are the possible adverse effects of on-demand AI image generation?
                    </div>
                    <div className="new-item">
                        Is VC Funding Drying Up?
                        Private funding by VC firms is down 50% YOY. We take a look at what that means.
                    </div>
                </div>
            </div>

            <div className="popular-news-items">
                <div className="popular-news-item">
                    01
                    Reviving Retro PCs
                    What happens when old PCs are given modern upgrades?
                </div>

                <div className="popular-news-item">
                    02
                    Top 10 Laptops of 2022
                    Our best picks for various needs and budgets.
                </div>

                <div className="popular-news-item">
                    03
                    The Growth of Gaming
                    How the pandemic has sparked fresh opportunities.
                </div>
            </div>

        </main>
    )
}

export default Main