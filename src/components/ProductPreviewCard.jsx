import React from 'react'
import IconSvg from './IconSvg'

const ProductPreviewCard = ({ name, category, discountedPrice, actualPrice, description }) => {

    return (
        <div className="card-container">
            <div className="card-image" >

            </div>
            <div className="card-content">

                <div className="category">
                    {category ? category : `perfume`}
                </div>
                <h2 className="product-name">
                    {name ? name : `Gabrielle Essence Eau De Parfum`}
                </h2>

                <p className="description">{description ? description : `A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.`}</p>
                <div className="price">
                    <h3 className="price-discounted">{discountedPrice ? discountedPrice : `$149.99`}</h3>
                    <p className="price-actual">{actualPrice ? actualPrice : `$169.99`}</p>
                </div>
                <button className="add-to-cart">
                    <IconSvg path='./../images/icon-cart.svg' />Add to Cart
                </button>
            </div>
        </div >
    )
}

export default ProductPreviewCard