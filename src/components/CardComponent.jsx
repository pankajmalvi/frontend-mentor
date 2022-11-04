import React from 'react'
import IconLuxury from './icons/IconLuxury'
import IconSedans from './icons/IconSedans'
import IconSuv from './icons/IconSuv'

const CardComponent = (props) => {
    const { title, description } = props

    function getIcon(title) {
        if (title === 'Sedans') {
            return <IconSedans />
        } else if (title === 'Luxury') {
            return <IconLuxury />
        } else if (title === 'SUVs') {
            return <IconSuv />
        }
    }

    return (
        <div className="card-container">
            <div className="card-icon"></div>
            {getIcon(title)}
            <h2 className="card-title">
                {title ? title : `Sedans`}
            </h2>
            <p className="card-description">
                {description ? description : `Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.`}
            </p>
            <button className='card-button'>Learn More</button>
        </div>
    )
}

export default CardComponent