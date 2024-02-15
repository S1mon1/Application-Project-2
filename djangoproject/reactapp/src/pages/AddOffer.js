import React from 'react';
import Navbar from '../components/Navbar';
import "./AddOffer.css"
import { useParams, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Sidebar from '../components/Sidebar';

const AddOffer = () => {

    const {id} = useParams()
    let [offer, setOffer] = useState({})
    const navigate = useNavigate()

    const handleInputChange = (event) => {
        setOffer(prevState => ({...prevState, [event.target.name]: event.target.value}));
    }

    let handleSubmit = () => {
        navigate('/')
    }

    let createOffer = async () => {
        fetch(`/api/offer/new/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(offer)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            navigate('/');
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }


    return (

        <div>
            <Navbar/>
            <Sidebar/>
            <form className='formContainer'>
                <div>
                    <input type="text" id="brand" name="brand" value={offer?.brand || ''} onChange={handleInputChange} placeholder="brand"/>
                </div>
                <div>
                    <input type="text" id="model" name="model" value={offer?.model || ''} onChange={handleInputChange} placeholder="model"/>
                </div>
                <div>
                    <textarea id="description" name="description" value={offer?.description || ''} onChange={handleInputChange} placeholder="description"/>
                </div>

                <button onClick={createOffer}>Add</button>
            </form>
        </div>
    );
}

export default AddOffer