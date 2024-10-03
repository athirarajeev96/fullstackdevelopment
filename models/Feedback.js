import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  trainerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trainer', required: true },
  trainerName: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Feedback = mongoose.model('Feedback', feedbackSchema);
export default Feedback;
