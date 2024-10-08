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
  trHover: {
    backgroundColor: '#e0e0e0',
  },
};

const ClassSchedulePage = () => {
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState({});
  const [classType, setClassType] = useState('');
  const [classDuration, setClassDuration] = useState('');
  const [classDate, setClassDate] = useState('');
  const [classTime, setClassTime] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterDuration, setFilterDuration] = useState(''); 
  const [filterTimeSlot, setFilterTimeSlot] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState('');

  const fetchClasses = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('http://localhost:8000/api/class');
      setClasses(response.data);
      let timeslots = []
      console.log('Fetched classes:', response.data, selectedClass);
      console.log('timeslots classes:', response.data['schedule']);
      const filteredClasses = classes.filter(cls => cls.name === selectedClass.name);
      console.log("filterd class: ", filteredClasses)
      console.log("selectedClass class: ", selectedClass)
      for(let schedule in response.data['schedule']){
        console.log("schedule: ", schedule)
      }
    } catch (error) {
      console.error('Error fetching classes:', error);
      setNotification(error.response?.data?.message || "Error fetching classes");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, [selectedClass]);

  const handleClassSelect = (e) => {
    const selectedClassData = classes.find(cls => cls._id === e.target.value);
    console.log("selectedClassData: ", selectedClassData)
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
      console.log('Sending schedule request:', { classId: selectedClass, date: classDate, time: classTime });
      const response = await axios.post('http://localhost:8000/api/schedule', {
        classId: selectedClass._id,
        name: selectedClass.name,
        date: classDate,
        duration: classDuration,
        type: selectedClass.type,
        time: classTime
      });
    
      console.log('Schedule response:', response.data);
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

  const getUniqueClassTypes = () => {
    return [...new Set(classes.map(cls => cls.type))];
  };

  const getUniqueDurations = () => {
    return [...new Set(classes.map(cls => cls.duration))];
  };

  const getUniqueTimeSlots = () => {
    const allTimeSlots = classes.flatMap(cls => 
      cls.schedule.flatMap(sch => 
        sch.timeSlots.map(slot => slot.time)
      )
    );
    return [...new Set(allTimeSlots)];
  };

  const getAvailableDates = () => {
    if (!selectedClass) return [];
    const selectedClassData = classes.find(cls => cls._id === selectedClass._id);
    return selectedClassData 
      ? selectedClassData.schedule.map(s => s.date) 
      : [];
  };

  const getAvailableTimeSlots = () => {
    console.log("selectedClass", selectedClass)
    console.log("classDate", classDate)
    if (!selectedClass || !classDate) return [];
    const selectedClassData = classes.find(cls => cls._id === selectedClass._id);
    console.log("selectedClassData", selectedClassData)
    const selectedSchedule = selectedClassData?.schedule.find(s => s.date === classDate);
    console.log("selectedSchedule: ", selectedSchedule)
    return selectedSchedule 
      ? selectedSchedule.timeSlots.filter(slot => slot.isAvailable).map(slot => slot.time) 
      : [];
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const filteredClasses = classes.filter(cls => 
    (!filterType || cls.type === filterType) &&
    (!filterDuration || cls.duration.toString() === filterDuration) &&
    (!filterTimeSlot || cls.schedule.some(s => s.timeSlots.some(slot => slot.time === filterTimeSlot)))
  );

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Schedule a Class</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group mb-3">
              <label htmlFor="className">Class Name</label>
              <select
                id="className"
                className="form-control"
                value={selectedClass._id}
                onChange={handleClassSelect}
              >
                <option value={selectedClass.name}>Select a Class</option>
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
          </div>
          <div className="col-md-6">
            <h3 style={styles.title}>Available Classes</h3>
            <div className="form-group mb-3">
              <label htmlFor="filterType">Filter by Type</label>
              <select
                id="filterType"
                className="form-control"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="">All Types</option>
                {getUniqueClassTypes().map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="filterDuration">Filter by Duration</label>
              <select
                id="filterDuration"
                className="form-control"
                value={filterDuration}
                onChange={(e) => setFilterDuration(e.target.value)}
              >
                <option value="">All Durations</option>
                {getUniqueDurations().map(duration => (
                  <option key={duration} value={duration}>{duration}</option>
                ))}
              </select>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="filterTimeSlot">Filter by Time Slot</label>
              <select
                id="filterTimeSlot"
                className="form-control"
                value={filterTimeSlot}
                onChange={(e) => setFilterTimeSlot(e.target.value)}
              >
                <option value="">All Time Slots</option>
                {getUniqueTimeSlots().map(slot => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
            <table style={styles.table}>
              <thead>
                <tr style={styles.tr}>
                  <th style={styles.th}>Class Name</th>
                  <th style={styles.th}>Type</th>
                  <th style={styles.th}>Duration (mins)</th>
                  <th style={styles.th}>Available Dates</th>
                  <th style={styles.th}>Time Slots</th>
                </tr>
              </thead>
              <tbody>
                {filteredClasses.length > 0 ? filteredClasses.map(cls => (
                  <tr key={cls._id} style={styles.tr}>
                    <td style={styles.td}>{cls.name}</td>
                    <td style={styles.td}>{cls.type}</td>
                    <td style={styles.td}>{cls.duration}</td>
                    <td style={styles.td}>
                      {cls.schedule.map(s => {
                        const formattedDate = formatDate(s.date);
                        return `${formattedDate}`;
                      }).join(', ')}
                    </td>
                    <td style={styles.td}>
                      {cls.schedule.flatMap(s => 
                        s.timeSlots.filter(slot => slot.isAvailable).map(slot => slot.time)
                      ).join(', ')}
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="5" style={styles.td}>No classes available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        {notification && <div style={styles.notification}>{notification}</div>}
      </div>
    </div>
  );
};

export default ClassSchedulePage;
