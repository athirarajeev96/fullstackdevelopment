import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';

function ViewUser() {
  const { id } = useParams(); // Get the userId from route parameters
  const [editedUser, setEditedUser] = useState(null);
  let navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData(id); // Call getData function to fetch user data
        setEditedUser(response);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      await axios.put(`https://6668fdc92e964a6dfed37d7c.mockapi.io/users/${id}`, editedUser);
      // Optionally, you can handle success actions here (e.g., redirect back to UserList)
      navigate('/')
    } catch (error) {
      console.error('Error editing user:', error);
    }
  };

  if (!editedUser) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div className="form-wrapper">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={editedUser.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={editedUser.username}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={editedUser.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={editedUser.phone}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Website</Form.Label>
          <Form.Control
            type="text"
            name="website"
            value={editedUser.website}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Company</Form.Label>
          <Form.Control
            type="text"
            name="company"
            value={editedUser.Company}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>CompanyCatchPhrase</Form.Label>
          <Form.Control
            type="text"
            name="companycatchphrase"
            value={editedUser.CompanyCatchPhrase}
            onChange={handleChange}
          />
        </Form.Group>
        

        <Form.Group className="mb-3">
          <Form.Label>CompanyBS</Form.Label>
          <Form.Control
            type="text"
            name="companybs"
            value={editedUser.CompanyBS}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>CompanyBS</Form.Label>
          <Form.Control
            type="text"
            name="companybs"
            value={editedUser.CompanyBS}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Street</Form.Label>
          <Form.Control
            type="text"
            name="address.street"
            value={editedUser.Street}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Suite</Form.Label>
          <Form.Control
            type="text"
            name="address.suite"
            value={editedUser.Suite}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            name="address.city"
            value={editedUser.City}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Zipcode</Form.Label>
          <Form.Control
            type="text"
            name="address.zipcode"
            value={editedUser.Zipcode}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Geo Lat</Form.Label>
          <Form.Control
            type="text"
            name="address.geo.lat"
            value={editedUser.geolat}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Geo Lng</Form.Label>
          <Form.Control
            type="text"
            name="address.geo.lng"
            value={editedUser.gelng}
            onChange={handleChange}
          />
        </Form.Group>
        

        <Button variant="primary" onClick={handleSubmit}>Save</Button>
      </Form>
    </div>
  );
}

// Function to fetch user data based on ID
const getData = async (id) => {
  try {
    const response = await axios.get(`https://6668fdc92e964a6dfed37d7c.mockapi.io/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching user with ID ${id}: ${error.message}`);
  }
};

export default ViewUser;
