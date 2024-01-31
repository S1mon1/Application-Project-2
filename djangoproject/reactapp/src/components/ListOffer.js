import React from 'react'
import { Link } from 'react-router-dom'


const ListOffer = ({offer}) => {
    return (
        <div>
            <Link to={`/offers/${offer.id}`}>
                <h3>{offer.brand}</h3>
                <h3>{offer.model}</h3>
            </Link>
        </div>
    )
}

export default ListOffer