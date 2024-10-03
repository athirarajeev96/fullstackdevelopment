import express from 'express';
import { createFeedback, getFeedback } from '../controllers/feedbackController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

// Submit feedback for a trainer
router.post('/', authMiddleware, async (req, res) => {
  const { trainerId, rating, comment } = req.body;
  const userId = req.user.id; // Assuming you're storing the user ID from the middleware

  try {
    await createFeedback(trainerId, rating, comment, userId);
    res.status(201).send({ message: 'Feedback submitted successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error submitting feedback' });
  }
});

// Get all feedbacks
router.get('/', async (req, res) => {
  try {
    const feedbacks = await getFeedback();
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(400).send({ message: 'Error fetching feedbacks' });
  }
});

export default router;
