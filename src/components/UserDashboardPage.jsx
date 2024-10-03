import React from 'react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <main className="container mt-4">
      <header>
        <h1 className="mb-4">User Dashboard</h1>
      </header>
      <section className="row">
        <DashboardCard 
          title="My Classes" 
          text="View and manage your booked classes." 
          link="/user/my-classes" 
          linkText="View My Classes" 
        />
        <DashboardCard 
          title="Profile" 
          text="Update your personal information and preferences." 
          link="/user/profile" 
          linkText="Go to Profile" 
        />
        <DashboardCard 
          title="Feedback" 
          text="Provide feedback on your classes and trainers." 
          link="/user/feedback" 
          linkText="Submit Feedback" 
        />
      </section>
    </main>
  );
};

const DashboardCard = ({ title, text, link, linkText }) => (
  <div className="col-md-4 mb-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <Link to={link} className="btn btn-primary">{linkText}</Link>
      </div>
    </div>
  </div>
);

export default UserDashboard;
