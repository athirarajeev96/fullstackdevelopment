// models/Booking.js
import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  trainer: { type: mongoose.Schema.Types.ObjectId, ref: 'Trainer', required: true },
  classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true } // e.g., "14:00"
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
