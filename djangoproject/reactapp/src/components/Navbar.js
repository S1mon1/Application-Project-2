import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>YourDreamCar</h1>
            <Link to="/home">Home</Link>
            <Link to="/">Offers</Link>
            <Link to="/users">Users</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </nav>
    );
};

export default Navbar;