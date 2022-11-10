import React from 'react'
import avatar from './../assets/images/image-avatar.png'
import imgHeader from './../assets/images/image-equilibrium.jpg'
import IconClock from './IconClock'
import IconEthereum from './IconEthereum'
const Card = ({ cardDetails }) => {
    const { nftName, nftNumber, nftDescription, nftPrice, nftNotice, createdBy } = cardDetails
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={imgHeader} alt="NFT Image" />
            </div>
            <div className="card-content">
                <h3 className="nft-heading">
                    {nftName && `Equilibrium`} #{nftNumber && `3429`}
                </h3>
                <p className="nft-description">
                    {nftDescription && `Our Equilibrium collection promotes balance and calm.`}
                </p>
                <div className="card-price-notice">
                    <p className="card-price">
                        <IconEthereum />
                        {nftPrice && `0.041 ETH`}
                    </p>
                    <p className="card-notice">
                        <IconClock />{nftNotice && `3 days left`}
                    </p>
                </div>
                <div className="card-footer">
                    <img src={avatar} alt="User Icon" />
                    <p className='user-description'>
                        Creation of <span className='user'>{createdBy && `Jules Wyvern`}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card