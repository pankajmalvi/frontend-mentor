import React from 'react'
import IconApi from './IconApi'
import IconBudgeting from './IconBudgeting'
import IconOnline from './IconOnline'
import imgConfetti from './../assets/images/image-confetti.jpg'
import imgCurrency from './../assets/images/image-currency.jpg'
import imgPlane from './../assets/images/image-plane.jpg'
import imgRestaurant from './../assets/images/image-restaurant.jpg'

const Main = () => {
    return (
        <main>
            <section className="hero">
                <div className="hero-container">
                    <div className="hero-image">
                        <div className="img-container"></div>
                    </div>

                    <div className="hero-content">
                        <h1 className="hero-heading">
                            Next generation digital banking
                        </h1>
                        <p className="hero-description">
                            Take your financial life online. Your Easybank account will be a one-stop-shop
                            for spending, saving, budgeting, investing, and much more.
                        </p>
                        <button className="hero-btn">Request Invite</button>
                    </div>


                </div>
            </section>


            <section className="why-section">
                <div className="why-section-container">

                    <div className="why-header">
                        <h1 className="why-section-heading heading-secondary">
                            Why choose Easybank?
                        </h1>
                        <p className="why-description">
                            We leverage Open Banking to turn your bank account into your financial hub. Control
                            your finances like never before.
                        </p>
                    </div>
                    <div className="why-reasons">
                        <div className="why-reason">
                            <IconOnline />
                            <h3 className="reason-heading">Online Banking
                            </h3>
                            <p className="reason-description">
                                Our modern web and mobile applications allow you to keep track of your finances
                                wherever you are in the world.
                            </p>
                        </div>
                        <div className="why-reason">
                            <IconBudgeting />
                            <h3 className="reason-heading">Simple Budgeting
                            </h3>
                            <p className="reason-description">
                                See exactly where your money goes each month. Receive notifications when you’re
                                close to hitting your limits.
                            </p>
                        </div>
                        <div className="why-reason">
                            <IconBudgeting />
                            <h3 className="reason-heading">Fast Onboarding
                            </h3>
                            <p className="reason-description">
                                We don’t do branches. Open your account in minutes online and start taking control
                                of your finances right away.
                            </p>
                        </div>
                        <div className="why-reason">
                            <IconApi />
                            <h3 className="reason-heading">Open API
                            </h3>
                            <p className="reason-description">
                                Manage your savings, investments, pension, and much more from one account. Tracking
                                your money has never been easier.
                            </p>
                        </div>
                    </div>
                </div>

            </section>

            <section className="latest-articles">
                <div className="latest-articles-container">

                    <div className="latest-articles-header">
                        <h2 className="heading-secondary latest-articles-heading">
                            Latest Articles
                        </h2>
                    </div>
                    <div className="articles">
                        <div className="article">
                            <div className="article-image">
                                <img src={imgCurrency} alt="Currency Image" />
                            </div>
                            <div className="article-content">
                                <small className="article-by">
                                    By Claire Robinson
                                </small>
                                <h3 className="article-heading">
                                    Receive money in any currency with no fees
                                </h3>
                                <p className="article-description">

                                    The world is getting smaller and we’re becoming more mobile. So why should you be
                                    forced to only receive money in a single …
                                </p>
                            </div>
                        </div>

                        <div className="article">
                            <div className="article-image">
                                <img src={imgRestaurant} alt="Image" />
                            </div>
                            <div className="article-content">
                                <small className="article-by">
                                    By Wilson Hutton
                                </small>
                                <h3 className="article-heading">
                                    Treat yourself without worrying about money
                                </h3>
                                <p className="article-description">

                                    Our simple budgeting feature allows you to separate out your spending and set
                                    realistic limits each month. That means you …
                                </p>
                            </div>
                        </div>

                        <div className="article">
                            <div className="article-image">
                                <img src={imgPlane} alt="Image" />
                            </div>
                            <div className="article-content">
                                <small className="article-by">
                                    By Wilson Hutton
                                </small>
                                <h3 className="article-heading">
                                    Take your Easybank card wherever you go
                                </h3>
                                <p className="article-description">

                                    We want you to enjoy your travels. This is why we don’t charge any fees on purchases
                                    while you’re abroad. We’ll even show you …
                                </p>
                            </div>
                        </div>

                        <div className="article">
                            <div className="article-image">
                                <img src={imgConfetti} alt="Image" />


                            </div>
                            <div className="article-content">
                                <small className="article-by">
                                    By Claire Robinson
                                </small>
                                <h3 className="article-heading">
                                    Our invite-only Beta accounts are now live!
                                </h3>
                                <p className="article-description">

                                    After a lot of hard work by the whole team, we’re excited to launch our closed beta.
                                    It’s easy to request an invite through the site ...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </main>
    )
}

export default Main