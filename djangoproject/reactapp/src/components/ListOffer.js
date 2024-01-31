import React from 'react'
import { Link } from 'react-router-dom'

const ListOffer = ({offer}) => {
    return (
        <Link to={`/offers/${offer.id}`}>
            <h3>{offer.model}</h3>
        </Link>
    )
}

export default ListOffer