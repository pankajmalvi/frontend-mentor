import React from 'react'
import CardComponent from './CardComponent'

const MainComponent = () => {
    const data = [
        {
            title: "Sedans",
            description: "Choose a sedan for its affordability and excellent fuel economy.Ideal for cruising in the city or on your next road trip.",
        },
        {
            title: "SUVs",
            description: "Take an SUV for its spacious interior, power, and versatility.Perfect for your next family vacation and off - road adventures.",
        },
        {
            title: "Luxury",
            description: "Cruise in the best car brands without the bloated prices.Enjoy the enhanced comfort of a luxury rental and arrive in style."
        }
    ]

    return (
        <main>
            {data.map((d) => <CardComponent title={d.title} description={d.description} key={d.title} />)}
        </main>
    )
}

export default MainComponent