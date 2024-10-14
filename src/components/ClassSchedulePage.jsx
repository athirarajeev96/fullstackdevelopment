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
    maxWidth: '600px',
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
};

const ClassSchedulePage = () => {
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState({});
  const [classType, setClassType] = useState('');
  const [classDuration, setClassDuration] = useState('');
  const [classDate, setClassDate] = useState('');
  const [classTime, setClassTime] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState('');

  const fetchClasses = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('http://localhost:8000/api/class');
      setClasses(response.data);
    } catch (error) {
      console.error('Error fetching classes:', error);
      setNotification(error.response?.data?.message || "Error fetching classes");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  const handleClassSelect = (e) => {
    const selectedClassData = classes.find(cls => cls._id === e.target.value);
    if (selectedClassData) {
      setSelectedClass(selectedClassData);
      setClassType(selectedClassData.type);
      setClassDuration(selectedClassData.duration.toString());
      setClassDate('');
      setClassTime('');
    }
  };

  const handleSchedule = async () => {
    if (!selectedClass || !classDate || !classTime) {
      setNotification("Please fill in all fields before scheduling.");
      return;
    }
    try {
      setIsLoading(true);
      const response = await axios.post('http://localhost:8000/api/schedule', {
        classId: selectedClass._id,
        name: selectedClass.name,
        date: classDate,
        duration: classDuration,
        type: selectedClass.type,
        time: classTime
      });
    
      setNotification("Class scheduled successfully!");
      setSelectedClass({});
      setClassType('');
      setClassDuration('');
      setClassDate('');
      setClassTime('');
      fetchClasses();
    } catch (error) {
      console.error("Error scheduling class:", error.response || error);
      setNotification(error.response?.data?.message || "Error scheduling class");
    } finally {
      setIsLoading(false);
    }
  };

  const getAvailableDates = () => {
    if (!selectedClass._id) return [];
    const selectedClassData = classes.find(cls => cls._id === selectedClass._id);
    return selectedClassData 
      ? selectedClassData.schedule.map(s => s.date) 
      : [];
  };

  const getAvailableTimeSlots = () => {
    if (!selectedClass._id || !classDate) return [];
    const selectedClassData = classes.find(cls => cls._id === selectedClass._id);
    const selectedSchedule = selectedClassData?.schedule.find(s => s.date === classDate);
    return selectedSchedule 
      ? selectedSchedule.timeSlots.filter(slot => slot.isAvailable).map(slot => slot.time) 
      : [];
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Schedule a Class</h2>
        <div className="form-group mb-3">
          <label htmlFor="className">Class Name</label>
          <select
            id="className"
            className="form-control"
            value={selectedClass._id || ''}
            onChange={handleClassSelect}
          >
            <option value="">Select a Class</option>
            {classes.map(cls => (
              <option key={cls._id} value={cls._id}>{cls.name}</option>
            ))}
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="classType">Class Type</label>
          <input
            type="text"
            id="classType"
            className="form-control"
            value={classType}
            readOnly
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="classDuration">Class Duration (minutes)</label>
          <input
            type="text"
            id="classDuration"
            className="form-control"
            value={classDuration}
            readOnly
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="classDate">Class Date</label>
          <select
            id="classDate"
            className="form-control"
            value={classDate}
            onChange={(e) => setClassDate(e.target.value)}
          >
            <option value="">Select Date</option>
            {getAvailableDates().map(date => (
              <option key={date} value={date}>{date}</option>
            ))}
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="classTime">Class Time</label>
          <select
            id="classTime"
            className="form-control"
            value={classTime}
            onChange={(e) => setClassTime(e.target.value)}
          >
            <option value="">Select Time</option>
            {getAvailableTimeSlots().map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary" onClick={handleSchedule} disabled={isLoading}>
          {isLoading ? 'Scheduling...' : 'Schedule Class'}
        </button>
        {notification && <div style={styles.notification}>{notification}</div>}
      </div>
    </div>
  );
};

export default ClassSchedulePage;
