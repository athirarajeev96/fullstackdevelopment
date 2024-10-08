import mongoose from 'mongoose';

const classSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  duration: { type: Number, required: true }, // Duration in minutes
  trainer: { type: mongoose.Schema.Types.ObjectId, ref: 'Trainer', required: true },
  schedule: [{
    date: { type: Date, required: true }, // The date of the class
    timeSlots: [{                        // An array of time slots for each date
      time: { type: String, required: true }, // Time of the slot
      isAvailable: { type: Boolean, default: true } // Availability of the time slot
    }]
  }],
  description: { type: String },
});

const Class = mongoose.model('Class', classSchema);
export default Class;
