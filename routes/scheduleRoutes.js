import express from 'express';
import Schedule from '../models/Schedule.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, classId, type, duration, date, time } = req.body;

  if (!name || !classId || !type || !duration || !date || !time) {
    return res.status(400).json({ message: 'Please provide classId, date, and time' });
  }

  // Create new schedule
  try{

    const schedule = new Schedule({
      name,
      classId,
      type,
      duration,
      date,
      time
    });
  
    await schedule.save();
    res.status(200).json({ message: 'Class scheduled successfully!' });
  }catch(error){
    console.log("error: ", error)
  }
  //
});

export default router;
