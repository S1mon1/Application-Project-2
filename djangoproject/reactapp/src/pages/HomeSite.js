import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import './HomeSite.css'
import Sidebar from '../components/Sidebar';

const HomeSite = () => {
    return (
        <div>
            <Sidebar/>
            <Navbar/>
            <Link to="/register" className='start'>Start</Link>
        </div>
    );
};

export default HomeSite;