import React from 'react'

const Main = () => {
    return (
        <main>
            <div className="heading-news-container">
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
            </div>

            <div className="new-news-container">
                <header className="new-news-header">
                    New
                </header>

                <div className="new-news-items">
                    <div className="new-item">
                        <h3 className="new-news-item-heading">
                            Hydrogen VS Electric Cars
                        </h3>
                        <p className="new-news-item-description">
                            Will hydrogen-fueled cars ever catch up to EVs?
                        </p>
                    </div>
                    <div className="new-item">
                        <h3 className="new-news-item-heading">
                            The Downsides of AI Artistry
                        </h3>
                        <p className="new-news-item-description">
                            What are the possible adverse effects of on-demand AI image generation?
                        </p>
                    </div>
                    <div className="new-item">
                        <h3 className="new-news-item-heading">
                            Is VC Funding Drying Up?
                        </h3>
                        <p className="new-news-item-description">
                            Private funding by VC firms is down 50% YOY. We take a look at what that means.
                        </p>
                    </div>
                </div>
            </div>

            <div className="popular-news-items">
                <div className="popular-news-item">
                    <div className="counter">
                        01
                    </div>
                    <h4 className="popular-news-heading">
                        Reviving Retro PCs
                    </h4>
                    <p className="popular-news-content">
                        What happens when old PCs are given modern upgrades?
                    </p>
                </div>

                <div className="popular-news-item">
                    <div className="counter">
                        02
                    </div>
                    <h4 className="popular-news-heading">
                        Top 10 Laptops of 2022
                    </h4>
                    <p className="popular-news-content">
                        Our best picks for various needs and budgets.
                    </p>

                </div>

                <div className="popular-news-item">
                    <div className="counter">
                        03
                    </div>
                    <h4 className="popular-news-heading">
                        The Growth of Gaming
                    </h4>
                    <p className="popular-news-content">
                        How the pandemic has sparked fresh opportunities.
                    </p>
                </div>
            </div>

        </main>
    )
}

export default Main