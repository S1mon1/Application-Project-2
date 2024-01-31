import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Offer = () => {
    const { id: offerId } = useParams()
    const [offer, setOffer] = useState(null)

    useEffect(() => {
        getOffer()
    }, [offerId])

    const getOffer = async () => {
        const response = await fetch(`/api/offers/${offerId}/`)
        const data = await response.json()
        setOffer(data)
    }

    return (
        <div>
            <p>{offer?.model}</p>
        </div>
    )
}

export default Offer