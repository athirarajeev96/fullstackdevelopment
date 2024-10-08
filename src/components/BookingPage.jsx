import React, { useState, useEffect } from 'react';
import AxiosService from '../utils/AxiosService';
import ApiRoutes from '../utils/ApiRoutes';
import { toast } from 'react-toastify';

const BookingPage = () => {
  const [classes, setClasses] = useState([]);
  const [bookings, setBookings] = useState([]); // Booking state
  const [loading, setLoading] = useState(true);  // Added loading state

  // Fetch available classes
  const fetchClasses = async () => {
    try {
      console.log("Fetching classes...");
      const { data } = await AxiosService.get(ApiRoutes.GET_ALL_CLASSES.path, {
        authenticate: ApiRoutes.GET_ALL_CLASSES.auth,
      });
      console.log("Classes fetched: ", data); // Debugging log
      setClasses(data);
    } catch (error) {
      console.log('Fetch Classes Error:', error);
      toast.error(error.message || 'Error fetching classes');
    }
  };

  // Fetch user bookings
  const fetchBookings = async () => {
    try {
      console.log("Fetching bookings...");
      const { data } = await AxiosService.get(ApiRoutes.GET_USER_BOOKINGS.path, {
        authenticate: ApiRoutes.GET_USER_BOOKINGS.auth,
      });
      console.log('Bookings fetched:', data); // Debugging log
      setBookings(data);
    } catch (error) {
      console.log('Fetch Bookings Error:', error);
      toast.error(error.message || 'Error fetching bookings');
    } finally {
      setLoading(false); // Stop loading once data is fetched
    }
  };

  // useEffect to fetch data
  useEffect(() => {
    fetchClasses();
    fetchBookings();
  }, []);  // Ensure this doesn't have any dependencies to trigger unnecessary re-renders

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Book a Class</h1>

      {loading ? (  // Conditional rendering for loading state
        <p>Loading...</p>
      ) : (
        <>
          <div className="row">
            <div className="col-md-6 mb-4">
              <h2>Available Classes</h2>
              <select className="form-select">
                <option value="">Select a Class</option>
                {classes.length === 0 && <option>No classes available</option>}
                {classes.map((cls) => (
                  <option key={cls.id} value={cls.id}>{cls.name}</option>
                ))}
              </select>
            </div>

            <div className="col-md-6 mb-4">
              <h2>Your Bookings</h2>
              {bookings.length === 0 ? (
                <p>No bookings available.</p>
              ) : (
                <ul className="list-group">
                  {bookings.map((booking) => (
                    <li key={booking.id} className="list-group-item">
                      {booking.className} on {booking.date}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BookingPage;
