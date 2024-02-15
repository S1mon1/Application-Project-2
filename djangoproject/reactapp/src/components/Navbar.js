import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import axios from 'axios'

const Navbar = () => {

  axios.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status ===  401) {
      }
      return Promise.reject(error);
    }
  );
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
          const refreshToken = localStorage.getItem('refresh');
          const accessToken = localStorage.getItem('access')

          await fetch('http://127.0.0.1:8000/authentification/logout/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify({ refresh_token: refreshToken }),
        });
      
          localStorage.removeItem('access');
          localStorage.removeItem('refresh');
          navigate('/');
        } catch (error) {
          console.error('An error occurred during logout:', error);
        }
      };

    return (
        <nav className="navbar">
            <h1>YourDreamCar</h1>
            <Link to="/home">Home</Link>
            <Link to="/">Offers</Link>
            <Link to="/users">Users</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    );
};

export default Navbar;