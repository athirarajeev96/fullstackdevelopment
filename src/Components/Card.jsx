import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

function Card({ id, name, description, status, onDelete, onEdit, updateStatus }) {
  const [localStatus, setLocalStatus] = useState(status);

  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    onEdit({ id, name, description, status });
  };

  const handleSelect = (eventKey) => {
    setLocalStatus(eventKey);
    updateStatus(id, eventKey); // Update the status in the parent state
  };

  return (
    <div className="card" style={{ maxWidth: '250px', padding: '10px', marginLeft: '10px', marginBottom: '15px' }}>
      <div className="card-body">
        <h6 className="card-title">Name: {name}</h6>
        <h6 className="card-description">Description: {description}</h6>
        <h6 className="card-status">Status:</h6>
        <Dropdown onSelect={handleSelect}>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            {localStatus}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="Completed">Completed</Dropdown.Item>
            <Dropdown.Item eventKey="Not Completed" active>Not Completed</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <button onClick={handleEdit} className="btn btn-primary mr-2 mt-3">Edit</button>
        &nbsp;&nbsp;
        <button onClick={handleDelete} className="btn btn-danger mt-3">Delete</button>
      </div>
    </div>
  );
}

export default Card;
