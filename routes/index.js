import express from 'express';
import authRoutes from './authRoutes.js';
import bookingRoutes from './bookingRoutes.js';
import classRoutes from './classRoutes.js';  
import feedbackRoutes from './feedbackRoutes.js';
import trainerRoutes from './trainerRoutes.js';
import scheduleRoutes from './scheduleRoutes.js';

const router = express.Router();

// Mounting routes with '/api' prefix to prevent conflicts
router.use('/auth', authRoutes);
router.use('/bookings', bookingRoutes); // Ensure this is correctly set
router.use('/class', classRoutes);
router.use('/feedback', feedbackRoutes);
router.use('/trainers', trainerRoutes);
router.use('/schedule', scheduleRoutes);

export default router;
