import React from 'react'
import { Link } from 'react-router-dom'
import './ListOffer.css'


const ListOffer = ({offer}) => {
    return (
        <div>
            <Link className='offers' to={`/offers/${offer.id}`}>
                
                <h3 className='brand'>{offer.brand}</h3>
                <h3 className='model'>{offer.model}</h3>
            </Link>
        </div>
    )
}

export default ListOffer