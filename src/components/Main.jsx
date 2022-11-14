import React from 'react'
import IconApi from './IconApi'
import IconBudgeting from './IconBudgeting'
import IconOnline from './IconOnline'

const Main = () => {
    return (
        <main>
            <section className="hero">
                <div className="hero-image"></div>
                <h1 className="hero-heading">
                    Next generation digital banking
                </h1>
                <p className="hero-description">
                    Take your financial life online. Your Easybank account will be a one-stop-shop
                    for spending, saving, budgeting, investing, and much more.
                </p>
                <button className="hero-btn">Request Invite</button>
            </section>


            <section className="why-section">
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

            </section>

            <section className="latest-articles">
                <div className="latest-articles-header">
                    <h2 className="heading-secondary latest-articles-heading">
                        Latest Articles
                    </h2>
                </div>
                <div className="articles">
                    <div className="article">
                        <div className="article-image"></div>
                        <div className="article-content">
                            <small className="article-by">
                                By Claire Robinson
                            </small>
                            <p className="article-description">
                                Receive money in any currency with no fees
                                The world is getting smaller and we’re becoming more mobile. So why should you be
                                forced to only receive money in a single …
                            </p>
                        </div>
                    </div>

                    <div className="article">
                        <div className="article-image"></div>
                        <div className="article-content">
                            <small className="article-by">
                                By Wilson Hutton
                            </small>
                            <p className="article-description">
                                Treat yourself without worrying about money
                                Our simple budgeting feature allows you to separate out your spending and set
                                realistic limits each month. That means you …
                            </p>
                        </div>
                    </div>

                    <div className="article">
                        <div className="article-image"></div>
                        <div className="article-content">
                            <small className="article-by">
                                By Wilson Hutton
                            </small>
                            <p className="article-description">
                                Take your Easybank card wherever you go
                                We want you to enjoy your travels. This is why we don’t charge any fees on purchases
                                while you’re abroad. We’ll even show you …
                            </p>
                        </div>
                    </div>

                    <div className="article">
                        <div className="article-image"></div>
                        <div className="article-content">
                            <small className="article-by">
                                By Claire Robinson
                            </small>
                            <p className="article-description">
                                Our invite-only Beta accounts are now live!
                                After a lot of hard work by the whole team, we’re excited to launch our closed beta.
                                It’s easy to request an invite through the site ...
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Main