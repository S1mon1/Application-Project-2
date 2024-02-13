import Navbar from "../components/Navbar";
import axios from 'axios';
import React, { useState, useEffect } from 'react'

const Users = () => {
    const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/authentification/users/')
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
        <Navbar/>
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.username}</li>
        
      ))}
    </ul>
    </div>
  );
}

export default Users