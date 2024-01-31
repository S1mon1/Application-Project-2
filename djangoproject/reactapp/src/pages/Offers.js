
import React, {useState, useEffect} from 'react'
import ListOffer from '../components/ListOffer'
import Navbar from '../components/Navbar'

const Offers = () => {

    let [offers, setOffers] = useState([])

    useEffect(() => {
        getOffers()        
    }, [])

    let getOffers = async () => {
        let response = await fetch ('/api/offers/')
        let data = await response.json()
        console.log('DATA:', data)
        setOffers(data)
    }

    return (
        <div>
            <Navbar/>
            <div className="offers-list">
                {offers.map((offer, index) =>(
                    <ListOffer key={index} offer={offer}/>
                ))}
            </div>
        </div>
    )
}

export default Offers