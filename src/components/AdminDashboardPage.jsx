// src/components/AdminDashboard.jsx
import React from 'react';
import AxiosService from '../utils/AxiosService';
import ApiRoutes from '../utils/ApiRoutes';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Admin Dashboard</h1>
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Manage Users</h5>
              <p className="card-text">View and manage all registered users.</p>
              <Link to="/admin/users" className="btn btn-primary">Go to Users</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Manage Classes</h5>
              <p className="card-text">View and manage all fitness classes.</p>
              <Link to="/admin/classes" className="btn btn-primary">Go to Classes</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">View Reports</h5>
              <p className="card-text">Generate and view reports on user activity and class bookings.</p>
              <Link to="/admin/reports" className="btn btn-primary">Go to Reports</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
