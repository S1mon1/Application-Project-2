
import React, {useState, useEffect} from 'react'

const Offers = () => {

    let [offers, setOffers] = useState([])

    useEffect(() => {
        getOffers()        
    }, [])

    let getOffers = async () => {
        let response = await fetch ('http://127.0.0.1:8000/api/offers/')
        let data = await response.json()
        console.log('DATA:', data)
        setOffers(data)
    }

    return (
        <div>
            <div className="offers-list">
                {offers.map((offer, index) =>(
                    <h3 key={index} >{offer.model}</h3>
                ))}
            </div>
        </div>
    )
}

export default Offers