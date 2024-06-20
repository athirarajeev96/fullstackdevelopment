// src/components/UserList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, Button } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';

function UserList() {
  const [userData, setUserData] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null); // State to track which user is being edited
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://6668fdc92e964a6dfed37d7c.mockapi.io/users');

        const data = response.data.map(user => ({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          phone: user.phone,
          website: user.website,
          address: {
            street: '5th cross',
            suite: 'Peace Layout',
            city: 'Bangalore',
            zipcode: '12345',
            geo: {
              lat: '20',
              lng: '20'
            }
          },
          company: {
            name: 'FACEPrep',
            catchPhrase: 'Think Placements',
            bs: '123'
          }
        }));

        setUserData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://6668fdc92e964a6dfed37d7c.mockapi.io/users/${id}`);
      setUserData(userData.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleEdit = (userId) => {
    setEditingUserId(userId); // Set the user ID to initiate editing mode
  };

  if (editingUserId) {
    return <Navigate to={`/view-user/${editingUserId}`}/>;
  }

  return (
    <Container>
      <h2 className="my-4">User Data</h2>
      <Button variant="success" className="mb-4" onClick={() => navigate('/add-user')}>
        Add User
      </Button>
      <div className="card-container">
        {userData.map((user) => (
          <div className="card-wrapper" key={user.id}>
            <Card>
              <Card.Body>
                <Card.Text>Name: {user.name}</Card.Text>
                <Card.Text>Username: {user.username}</Card.Text>
                <Card.Text>Email: {user.email}</Card.Text>
                <Card.Text>Phone: {user.phone}</Card.Text>
                <Card.Text>Website: {user.website}</Card.Text>
                <Card.Text>Company: {user.company.name}</Card.Text>
                <Card.Text>Company CatchPhrase: {user.company.catchPhrase}</Card.Text>
                <Card.Text>Company BS: {user.company.bs}</Card.Text>
                <Card.Text>Street: {user.address.street}, {user.address.city}</Card.Text>
                <Card.Text>Suite: {user.address.suite}</Card.Text>
                <Card.Text>Zipcode: {user.address.zipcode}</Card.Text>
                <Card.Text>Geo Lat: {user.address.geo.lat}</Card.Text>
                <Card.Text>Geo Lng: {user.address.geo.lng}</Card.Text>
                <Button variant="primary" className="mr-2" onClick={() => handleEdit(user.id)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(user.id)}>Delete</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default UserList;
