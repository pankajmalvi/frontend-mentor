import React from 'react'
import Card from './Card'

const Main = () => {
    const cardDetails = {
        nftName: "Equilibrium",
        nftNumber: "3429",
        nftDescription: "Our Equilibrium collection promotes balance and calm.",
        nftPrice: "0.041 ETH",
        nftNotice: "3 days left",
        createdBy: "Jules Wyvern"
    }

    return (
        <main>
            <Card cardDetails={cardDetails} />
        </main>
    )
}

export default Main