import React, { useState, useEffect } from 'react';
import axios from 'axios';

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: "url('https://img.freepik.com/free-vector/realistic-style-technology-particle-background_23-2148426704.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727654400&semt=ais_hybrid')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '2rem',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '800px',
    margin: '1rem',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#1f2937',
  },
  notification: {
    marginTop: '1rem',
    textAlign: 'center',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '1rem',
  },
  th: {
    backgroundColor: '#410646',
    color: 'white',
    padding: '0.75rem',
    border: '2px solid black',
    textAlign: 'center',
  },
  td: {
    padding: '0.75rem',
    border: '2px solid black',
    textAlign: 'center',
  },
  tr: {
    transition: 'background-color 0.3s',
  },
  bookButton: {
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.3s',
  },
  bookButtonHover: {
    backgroundColor: '#0056b3',
    transform: 'scale(1.05)',
  },
};

const BookingPage = () => {
  const [classes, setClasses] = useState([]);
  const [notification, setNotification] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

  const fetchClasses = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('http://localhost:8000/api/class');
      setClasses(response.data);
    } catch (error) {
      setNotification(error.response?.data?.message || 'Error fetching classes');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  const handleBook = async (selectedTrainerId, classId, classDate, classTime) => {
    const userId = localStorage.getItem('userId');
    console.log('User ID from localStorage:', userId); // Debugging log

    if (!userId) {
      setNotification('User not logged in. Please log in and try again.');
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.post('http://localhost:8000/api/bookings', {
        user: userId,
        trainer: selectedTrainerId,
        classId: classId,
        date: classDate,
        time: classTime,
      });
      console.log('Booking response:', response.data);
      setNotification('Class booked successfully!');
      fetchClasses();
    } catch (error) {
      console.error('Booking error:', error);
      setNotification(error.response?.data?.message || 'Error booking class. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const getAvailableDates = (cls) => cls.schedule.map(s => s.date);
  const getAvailableTimeSlots = (cls, classDate) => {
    const selectedSchedule = cls.schedule.find(s => s.date === classDate);
    return selectedSchedule ? selectedSchedule.timeSlots.filter(slot => slot.isAvailable).map(slot => slot.time) : [];
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const filteredClasses = classes.filter(cls => cls.schedule.some(s => s.timeSlots.some(slot => slot.isAvailable)));

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h3 style={styles.title}>Available Classes</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Class Name</th>
              <th style={styles.th}>Available Dates</th>
              <th style={styles.th}>Available Times</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredClasses.map(cls => {
              const availableDates = getAvailableDates(cls);
              return availableDates.map(date => {
                const availableTimeSlots = getAvailableTimeSlots(cls, date);
                return availableTimeSlots.map((time) => (
                  <tr key={`${cls._id}-${date}-${time}`} style={styles.tr}>
                    <td style={styles.td}>{cls.name}</td>
                    <td style={styles.td}>{formatDate(date)}</td>
                    <td style={styles.td}>{time}</td>
                    <td style={styles.td}>
                      <button 
                        onClick={() => handleBook(cls._id, cls.name, date, time)} 
                        style={{
                          ...styles.bookButton,
                          ...(hoveredButton === `${cls._id}-${date}-${time}` ? styles.bookButtonHover : {})
                        }}
                        onMouseEnter={() => setHoveredButton(`${cls._id}-${date}-${time}`)}
                        onMouseLeave={() => setHoveredButton(null)}
                      >
                        Book Class
                      </button>
                    </td>
                  </tr>
                ));
              });
            })}
          </tbody>
        </table>
        {notification && <div style={styles.notification}>{notification}</div>}
        {isLoading && <div style={styles.notification}>Loading...</div>}
      </div>
    </div>
  );
};

export default BookingPage;