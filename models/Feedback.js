import mongoose from 'mongoose';

// Define the Feedback Schema
const FeedbackSchema = new mongoose.Schema({
  trainerName: {
    type: String,
    required: true, // Ensure trainer name is required
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: true,
  },
}, { timestamps: true });

// Create the Feedback model from the schema
const Feedback = mongoose.model('Feedback', FeedbackSchema);

// Export the Feedback model
export default Feedback;
