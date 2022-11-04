import React from 'react'

const CardComponent = (props) => {
    const { title, description } = props


    return (
        <div className="card-container">

            {title ? title : `Sedans`}
            {description ? description : `Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city
            or on your next road trip.`}
        </div>
    )
}

export default CardComponent