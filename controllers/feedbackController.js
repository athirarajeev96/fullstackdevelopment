import Feedback from '../models/Feedback.js'; // Assuming Feedback is your Mongoose model
import Trainer from '../models/Trainer.js';   // Assuming Trainer is your Mongoose model

// Create Feedback
export const createFeedback = async (trainerId, rating, comment, userId) => {
  try {
    // Find the trainer using the trainerId to fetch the trainer's name
    const trainer = await Trainer.findById(trainerId);
    if (!trainer) {
      throw new Error('Trainer not found');
    }

    const trainerName = trainer.name; // Fetch the trainer's name

    // Create the feedback with trainerName, rating, and comment
    const feedback = new Feedback({
      trainerId,
      trainerName, // Automatically assign the trainer name
      rating,
      comment,
      userId, // If you want to track who submitted the feedback
    });

    // Save the feedback to the database
    await feedback.save();
    return feedback;
  } catch (error) {
    throw error;
  }
};


// Get all feedbacks (optionally filter by trainer)
export const getFeedback = async () => {
  try {
    // Fetch all feedbacks, including the trainer name that was saved earlier
    const feedbacks = await Feedback.find(); // Returns feedback along with the trainer name stored
    return feedbacks;
  } catch (error) {
    throw error;
  }
};
