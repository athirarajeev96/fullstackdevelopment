import React, { useEffect, useState } from 'react';
import axiosService from '../utils/AxiosService';
import { toast } from 'react-toastify';

const styles = {
  pageContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: "url('https://img.freepik.com/free-vector/realistic-style-technology-particle-background_23-2148426704.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727654400&semt=ais_hybrid')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '2rem',
  },
  pageTitle: {
    color: 'white',
    marginBottom: '2rem',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)', // Added for better visibility against the background
  },
  trainerList: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // semi-transparent background for better readability
    padding: '2rem',
    borderRadius: '10px',
    maxWidth: '1200px',
    width: '100%',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  trainerCard: {
    backgroundColor: '#fff',
    padding: '1rem',
    marginBottom: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  trainerPhoto: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: '1rem',
  },
  trainerContent: {
    display: 'flex',
    gap: '1rem',
  },
  trainerInfo: {
    flex: 1,
  },
  errorMessage: {
    color: 'red',
  },
};

const TrainerProfilePage = () => {
    const [trainers, setTrainers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchTrainers = async () => {
        console.log('Fetching trainers...');
        try {
            const response = await axiosService.get('http://localhost:8000/api/trainers');
            console.log('API Response:', response);
            console.log('Response Data:', response.data);

            if (Array.isArray(response.data)) {
                setTrainers(response.data);
            } else {
                console.error("Expected an array but received:", response.data);
                setError("Invalid data format received from server");
            }
        } catch (error) {
            console.error('Error fetching trainers:', error);
            setError(error.message || "Error fetching trainers");
            toast.error(error.message || "Error fetching trainers");
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchTrainers();
    }, []);

    if (loading) return <div style={{ ...styles.pageContainer, color: 'white' }}>Loading...</div>;
    if (error) return <div style={{ ...styles.pageContainer, color: 'white' }}>Error: {error}</div>;

    return (
        <div style={styles.pageContainer}>
          <h1 style={styles.pageTitle}>Meet Our Trainers</h1>
          {loading && <div className="loading" style={{ color: 'white' }}>Loading...</div>}
          {error && <div style={styles.errorMessage}>Error: {error}</div>}
          {trainers.length > 0 ? (
            <div style={styles.trainerList}>
              {trainers.map((trainer) => (
                <div key={trainer._id} style={styles.trainerCard}>
                  <h2>{trainer.name}</h2>
                  <div style={styles.trainerContent}>
                    <div>
                      <img
                        src={trainer.profilePhoto}
                        alt={`${trainer.name}'s profile`}
                        style={styles.trainerPhoto}
                      />
                    </div>
                    <div style={styles.trainerInfo}>
                      <p><strong>Qualifications:</strong> {trainer.qualifications}</p>
                      <p><strong>Expertise:</strong> {trainer.expertise}</p>
                      <p>{trainer.description}</p>
                      <p><strong>Availability:</strong> {trainer.availability.join(', ')}</p>
                      {trainer.introVideo && (
                        <a href={trainer.introVideo} className="trainer-video-link">Watch Intro Video</a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ ...styles.errorMessage, color: 'white' }}>No trainers available.</div>
          )}
        </div>
      );
};

export default TrainerProfilePage;