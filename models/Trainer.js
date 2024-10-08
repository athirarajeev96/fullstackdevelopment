import mongoose from 'mongoose';

const trainerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qualifications: { type: String, required: true },
  expertise: { type: String, required: true },
  profilePhoto: { type: String }, // URL to the profile photo
  introVideo: { type: String }, // URL to the introduction video
  description: { type: String },
  availability: [{ type: String }], // Array of strings for availability
}, { timestamps: true });

const Trainer = mongoose.model('Trainer', trainerSchema);
export default Trainer;