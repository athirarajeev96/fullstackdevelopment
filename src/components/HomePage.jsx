import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AxiosService from '../utils/AxiosService';
import ApiRoutes from '../utils/ApiRoutes';

const FeatureModal = ({ isOpen, onClose, feature }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>{feature.title}</h2>
        <p>{feature.description}</p>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [classes, setClasses] = useState([]);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const navigate = useNavigate();

  const features = [
    {
      id: 1,
      title: "Yoga Classes",
      shortDescription: "Discover inner peace and flexibility",
      description: "Our yoga classes cater to all levels, from beginners to advanced practitioners. Experience the perfect blend of physical postures, breathing exercises, and meditation techniques. Our expert instructors guide you through various styles including Hatha, Vinyasa, and Restorative yoga, helping you improve flexibility, strength, and mental clarity.",
      image: "https://patanjaleeyoga.com/wp-content/uploads/2023/10/Personalised-Yoga.webp"
    },
    {
      id: 2,
      title: "Zumba",
      shortDescription: "Dance your way to fitness",
      description: "Join our high-energy Zumba classes for a fun and effective full-body workout. Combining Latin and international music with dance moves, Zumba is a party-like atmosphere where you'll burn calories without even realizing it. Our certified instructors ensure you have a blast while toning your body and improving cardiovascular health.",
      image: "https://img.grouponcdn.com/deal/sNYBxfcxJPVZK9Yznx73/tk-2048x1229/v1/sc600x600.webp"
    },
    {
      id: 3,
      title: "Cardio Blast",
      shortDescription: "Boost your heart health and stamina",
      description: "Get ready to sweat with our high-intensity Cardio Blast sessions. These classes are designed to elevate your heart rate, burn fat, and increase your overall endurance. Through a mix of aerobic exercises, plyometrics, and interval training, you'll challenge your body and see rapid improvements in your cardiovascular fitness and metabolism.",
      image: "https://mossa.net/wp-content/uploads/2020/12/pic-workouts-left-groupblast-new.jpg"
    },
    {
      id: 4,
      title: "Strengthening",
      shortDescription: "Build muscle and increase power",
      description: "Our strengthening classes focus on building lean muscle mass, increasing bone density, and improving overall body composition. Using a combination of bodyweight exercises, free weights, and resistance machines, you'll work all major muscle groups. Our trainers provide personalized guidance to ensure proper form and help you achieve your strength goals safely and effectively.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPbMZpyQRJW6fd5HyJXfwmgJ41ujuQdbgPhA&s"
    }
  ];

  const fetchClasses = async () => {
    try {
      const { data } = await AxiosService.get(ApiRoutes.GET_CLASSES.path, { authenticate: ApiRoutes.GET_CLASSES.auth });
      setClasses(data);
    } catch (error) {
      console.error("Failed to fetch classes:", error.message || "Internal Server Error");
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  const handleLogout = () => {
    navigate('/');
  };

  const openFeatureModal = (feature) => {
    setSelectedFeature(feature);
  };

  const closeFeatureModal = () => {
    setSelectedFeature(null);
  };

  return (
    <div className="fitness-homepage">
      <header className="hero">
        <nav className="main-nav">
          <div className="nav-left">
            <Link to="/" className="logo">FitFlex</Link>
          </div>
          <div className="nav-center">
            <Link to="/class-schedule">Class Schedule</Link>
            <Link to="/trainers">Our Trainers</Link>
            <Link to="/trainer-feedback">Trainer Feedback</Link>
          </div>
          <div className="nav-right">
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        </nav>
        <div className="hero-content">
          <h1 className="hero-title">Fitness that fits you</h1>
          <p className="hero-subtitle">Join FitFlex and transform your life</p>
          <Link to="/bookings" className="cta-button">Get Started</Link>
        </div>
      </header>

      <main>
        <section className="features">
          <h2 className="section-title">Why Choose FitFlex?</h2>
          <div className="feature-grid">
            {features.map((feature) => (
              <div key={feature.id} className="feature" onClick={() => openFeatureModal(feature)}>
                <img src={feature.image} alt={feature.title} className="feature-icon" />
                <h3>{feature.title}</h3>
                <p>{feature.shortDescription}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="featured-classes">
          <h2 className="section-title">Featured Classes</h2>
          <div className="class-grid">
            {classes.length > 0 ? (
              classes.map((classItem) => (
                <div key={classItem.id} className="class-card">
                  <img src="https://assets.clevelandclinic.org/transform/961a1749-1e63-48e8-9550-cb6d2ed2c8b0/HotYoga-1076946682-770x533-1_jpg" alt={classItem.name} className="class-image" />
                  <div className="class-info">
                    <h3>{classItem.name}</h3>
                    <p>{classItem.description}</p>
                    <Link to={`/class/${classItem.id}`} className="class-link">Learn More</Link>
                  </div>
                </div>
              ))
            ) : (
              <p>No classes available at the moment.</p>
            )}
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: info@fitflex.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
        <div className="copyright">
          © 2024 FitFlex. All rights reserved.
        </div>
      </footer>

      <FeatureModal
        isOpen={!!selectedFeature}
        onClose={closeFeatureModal}
        feature={selectedFeature}
      />
    </div>
  );
};

export default HomePage;