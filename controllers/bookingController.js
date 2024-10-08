// controllers/bookingController.js
import Booking from '../models/Booking.js';

// Create a new booking
export const createBooking = async (req, res) => {
  const { trainer, classId, date, time } = req.body;

  try {
    const booking = new Booking({ trainer, classId, date, time });
    await booking.save();

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all bookings for a user
export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.userId }).populate('classId trainer');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a booking
export const updateBooking = async (req, res) => {
  const { id } = req.params;
  const { date, time } = req.body;

  try {
    const booking = await Booking.findById(id);

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    booking.date = date || booking.date;
    booking.time = time || booking.time;
    await booking.save();

    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a booking
export const deleteBooking = async (req, res) => {
  const { id } = req.params;

  try {
    const booking = await Booking.findById(id);

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    await booking.remove();
    res.json({ message: 'Booking deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
