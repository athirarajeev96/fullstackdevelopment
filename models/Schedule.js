import mongoose from 'mongoose';

const scheduleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    classId: { type: String, required: true },
    type: { type: String, required: true },
    duration: { type: Number, required: true }, // Duration in minutes
    date: { type: Date, required: true }, // The date of the class
    time: { type: String, required: true }, // Time of the slot
});

const Schedule = mongoose.model('Schedule', scheduleSchema);
export default Schedule;