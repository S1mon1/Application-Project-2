import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import DeleteButton from '../components/DeleteButton'


const Offer = () => {
    const { id: offerId } = useParams()
    const [offer, setOffer] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        getOffer()
    }, [offerId])

    const getOffer = async () => {
        const response = await fetch(`/api/offers/${offerId}/`)
        const data = await response.json()
        setOffer(data)
    }

    let deleteOffer = async () => {
        try {
            const response = await fetch(`/api/offer/${offerId}/delete/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            navigate('/');
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div>
            <Navbar/>
            <DeleteButton onClick={deleteOffer}/>
            <img src={offer?.image} />
            <p>{offer?.brand}</p>
            <p>{offer?.model}</p>
            <p>{offer?.description}</p>
        </div>
    )
}

export default Offer