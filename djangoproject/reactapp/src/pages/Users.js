import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';

const UserList = () => {
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

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`/authentification/users/${userId}/`);
      setUsers(users.filter(user => user.id !== userId));
    } catch (err) {
      setError(err.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Sidebar/>
        <Navbar/>
        <ul>
        {users.map(user => (
            <li key={user.id}>
            {user.username}
            <button onClick={() => deleteUser(user.id)}>Delete</button>
            </li>
        ))}
        </ul>
    </div>
  );
};

export default UserList;