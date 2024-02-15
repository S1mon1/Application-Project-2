
import React, {useState, useEffect} from 'react'
import ListOffer from '../components/ListOffer'
import Navbar from '../components/Navbar'
import AddButton from '../components/AddButton'
import './Offers.css'
import Sidebar from '../components/Sidebar'

const Offers = () => {
const isAuthenticated = !!localStorage.getItem('access');

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
            <Sidebar/>
            <Navbar/>
            {isAuthenticated ? (
            <AddButton/>
            ) : null}
            <div className="offers-list">
                {offers.map((offer, index) =>(
                    <ListOffer key={index} offer={offer}/>
                ))}
            </div>
        </div>
    )
}

export default Offers