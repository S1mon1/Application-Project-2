import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'

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
            <Navbar/>
            <p>{offer?.brand}</p>
            <p>{offer?.model}</p>
            <p>{offer?.description}</p>
        </div>
    )
}

export default Offer