import React, { useState } from 'react';
import './Sidebar.css';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = ({ isAuthenticated }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

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
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="sidebar-toggle" onClick={toggleSidebar}></button>
      <nav className="sidebar-nav">
        <Link to="/home" className="sidebar-link">Home</Link>
        <Link to="/" className="sidebar-link">Offers</Link>
        <Link to="/users" className="sidebar-link">Users</Link>
        <Link to="/login" className="sidebar-link">Login</Link>
        <Link to="/register" className="sidebar-link">Register</Link>
        {isAuthenticated && (
          <button onClick={handleLogout}>Logout</button>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;