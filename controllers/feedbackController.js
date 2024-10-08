import Feedback from '../models/Feedback.js'; // Assuming Feedback is your Mongoose model
import Trainer from '../models/Trainer.js';   // Assuming Trainer is your Mongoose model

// Create Feedback
export const createFeedback = async (trainerName, rating, comment, userId) => {
  try {
    // Find the trainer using the trainerName to validate if it exists
    const trainer = await Trainer.findOne({ name: trainerName }); // Use `findOne` to find by trainer name
    if (!trainer) {
      throw new Error('Trainer not found');
    }

    // Create the feedback with trainerId, rating, and comment
    const feedback = new Feedback({
      trainerName,             // Store the trainer's name
      rating,
      comment,
      userId                   // Include userId if necessary for tracking who submitted the feedback
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
    const feedbacks = await Feedback.find()
      .populate('trainerId', 'name') // Populate the trainerId field with trainer name
      .exec();
    return feedbacks;
  } catch (error) {
    throw error;
  }
};
