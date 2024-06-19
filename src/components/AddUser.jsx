// src/components/AddUser.js

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddUser({ addUser }) {
  const [newUser, setNewUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
    },
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: ''
      }
    }
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith('company.')) {
      const companyField = name.split('.')[1];
      setNewUser(prevUser => ({
        ...prevUser,
        company: {
          ...prevUser.company,
          [companyField]: value
        }
      }));
    } else if (name.startsWith('address.')) {
      const addressField = name.split('.')[1];
      setNewUser(prevUser => ({
        ...prevUser,
        address: {
          ...prevUser.address,
          [addressField]: value
        }
      }));
    } else if (name.startsWith('address.geo.')) {
      const geoField = name.split('.')[2];
      setNewUser(prevUser => ({
        ...prevUser,
        address: {
          ...prevUser.address,
          geo: {
            ...prevUser.address.geo,
            [geoField]: value
          }
        }
      }));
    } else {
      setNewUser(prevUser => ({
        ...prevUser,
        [name]: value
      }));
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://6668fdc92e964a6dfed37d7c.mockapi.io/users', newUser);
      addUser(response.data); // Call the addUser function passed as a prop to update the user list
      navigate('/');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div className="form-wrapper">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={newUser.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={newUser.username}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={newUser.phone}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Website</Form.Label>
          <Form.Control
            type="text"
            name="website"
            value={newUser.website}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type="text"
            name="company.name"
            value={newUser.company.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Company CatchPhrase</Form.Label>
          <Form.Control
            type="text"
            name="company.catchPhrase"
            value={newUser.company.catchPhrase}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Company BS</Form.Label>
          <Form.Control
            type="text"
            name="company.bs"
            value={newUser.company.bs}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Street</Form.Label>
          <Form.Control
            type="text"
            name="address.street"
            value={newUser.address.street}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Suite</Form.Label>
          <Form.Control
            type="text"
            name="address.suite"
            value={newUser.address.suite}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            name="address.city"
            value={newUser.address.city}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Zipcode</Form.Label>
          <Form.Control
            type="text"
            name="address.zipcode"
            value={newUser.address.zipcode}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Geo Lat</Form.Label>
          <Form.Control
            type="text"
            name="address.geo.lat"
            value={newUser.address.geo.lat}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Geo Lng</Form.Label>
          <Form.Control
            type="text"
            name="address.geo.lng"
            value={newUser.address.geo.lng}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit}>Save</Button>
      </Form>
    </div>
  );
}

export default AddUser;
