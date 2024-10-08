import express from 'express';
import { createBooking, getBookings, updateBooking, deleteBooking } from '../controllers/bookingController.js';
import { authMiddleware } from '../middleware/authMiddleware.js'; // Use authMiddleware as needed

const router = express.Router();

// Create a new booking
router.post('/', authMiddleware, createBooking);

// Get all bookings for a user
router.get('/', authMiddleware, getBookings);

// Update a booking (e.g., reschedule)
router.put('/:id', authMiddleware, updateBooking);

// Delete a booking (e.g., cancel)
router.delete('/:id', authMiddleware, deleteBooking);

export default router;
