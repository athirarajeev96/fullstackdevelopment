import Feedback from '../models/Feedback.js';
import Trainer from '../models/Trainer.js';

// Create Feedback
export const createFeedback = async (trainerName, rating, comment) => {
  try {
    // Find the trainer by trainerName
    const trainer = await Trainer.findOne({ name: trainerName }); 
    if (!trainer) {
      throw new Error('Trainer not found');
    }

    // Create the feedback with trainerId, rating, and comment
    const feedback = new Feedback({
      trainerId: trainer._id,  // Store trainerId
      rating,
      comment,
    });

    // Save the feedback to the database
    await feedback.save();
    return feedback;
  } catch (error) {
    throw error;
  }
};

// Get all feedbacks
export const getFeedback = async () => {
  try {
    // Fetch all feedbacks, populating the trainer's name
    const feedbacks = await Feedback.find()
      .populate('trainerId', 'name') // Populate the trainerId field with trainer's name
      .exec();
    return feedbacks;
  } catch (error) {
    throw error;
  }
};
