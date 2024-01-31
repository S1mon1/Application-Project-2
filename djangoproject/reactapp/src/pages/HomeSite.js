import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import './HomeSite.css'

const HomeSite = () => {
    return (
        <div>
            <Navbar/>
            <Link to="/register" className='start'>Start</Link>
        </div>
    );
};

export default HomeSite;