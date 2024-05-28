import { left } from '@popperjs/core';
import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

function Statusfilter({ setFilter }) {
  const [filter, setLocalFilter] = useState('All');

  const handleSelect = (eventKey) => {
    setLocalFilter(eventKey);
    setFilter(eventKey); // Update the filter in the parent state
  };

  return (
    <div className="container mt-5">
      <div className="row align-items-center justify-content-between">
        <div className="col-md-6">
        <h6><strong>My todos</strong></h6>
        </div>
        <div className="col-md-6 text-md-right">
          <div className="d-flex justify-content-end align-items-center">
            <h6><strong>Status Filter :   </strong></h6>
            <Dropdown onSelect={handleSelect} className="ml-3">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                {filter}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="All">All</Dropdown.Item>
                <Dropdown.Item eventKey="Completed">Completed</Dropdown.Item>
                <Dropdown.Item eventKey="Not Completed">Not Completed</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statusfilter;
