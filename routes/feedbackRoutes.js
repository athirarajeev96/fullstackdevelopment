import express from 'express';
import { createFeedback, getFeedback } from '../controllers/feedbackController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import Feedback from '../models/Feedback.js'; // Adjust the path according to your structure
import Trainer from '../models/Trainer.js'; // Import the Trainer model

const router = express.Router();

// Submit Feedback
router.post('/create', authMiddleware, async (req, res) => {
  const { trainerName, rating, comment } = req.body; // Use trainerName instead of trainerId

  // Validate input
  if (!trainerName || !rating || !comment) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Validate rating range
  if (rating < 1 || rating > 5) {
    return res.status(400).json({ message: 'Rating must be between 1 and 5.' });
  }

  try {
    // Find the trainer by name
    const trainer = await Trainer.findOne({ name: trainerName });
    if (!trainer) {
      return res.status(404).json({ message: 'Trainer not found.' });
    }

    // Create new feedback
    const newFeedback = new Feedback({ 
      trainerId: trainer._id,  // Use trainerId from the trainer found
      rating, 
      comment 
    });
    
    await newFeedback.save();
    return res.status(201).json({ message: 'Feedback submitted successfully!', feedback: newFeedback });
  } catch (error) {
    console.error("Error saving feedback:", error);
    return res.status(500).json({ message: 'Error submitting feedback.', error: error.message });
  }
});

// Get All Feedbacks for a Trainer by Name
router.get('/trainer/:trainerName', async (req, res) => {
  const { trainerName } = req.params;

  try {
    // Find the trainer by name
    const trainer = await Trainer.findOne({ name: trainerName });
    if (!trainer) {
      return res.status(404).json({ message: 'Trainer not found.' });
    }

    // Fetch feedbacks for the trainer
    const feedbacks = await Feedback.find({ trainerId: trainer._id }); // Use trainerId for finding feedback
    return res.status(200).json(feedbacks);
  } catch (error) {
    console.error("Error fetching feedbacks:", error);
    return res.status(500).json({ message: 'Error fetching feedbacks.', error: error.message });
  }
});

export default router; // Use ES6 export syntax
