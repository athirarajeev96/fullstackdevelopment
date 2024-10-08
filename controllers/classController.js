// controllers/classController.js
import Class from '../models/Class.js';

// Create a new class
export const createClass = async (req, res) => {
  const { name, type, duration, trainer, schedule, description } = req.body;

  try {
    const newClass = new Class({ name, type, duration, trainer, schedule, description });
    await newClass.save();

    res.status(201).json(newClass); // Respond with the created class
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all classes
export const getClasses = async (req, res) => {
  try {
    const classes = await Class.find().populate('trainer', 'name');
    res.json(classes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific class by ID
export const getClassById = async (req, res) => {
  const { id } = req.params;

  try {
    const classItem = await Class.findById(id).populate('trainer', 'name');

    if (!classItem) {
      return res.status(404).json({ message: 'Class not found' });
    }

    res.json(classItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update class details
export const updateClass = async (req, res) => {
  const { id } = req.params;
  const { name, type, duration, trainer, schedule, description } = req.body;

  try {
    const classItem = await Class.findById(id);

    if (!classItem) {
      return res.status(404).json({ message: 'Class not found' });
    }

    classItem.name = name || classItem.name;
    classItem.type = type || classItem.type;
    classItem.duration = duration || classItem.duration;
    classItem.trainer = trainer || classItem.trainer;
    classItem.schedule = schedule || classItem.schedule;
    classItem.description = description || classItem.description;
    await classItem.save();

    res.json(classItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a class
export const deleteClass = async (req, res) => {
  const { id } = req.params;

  try {
    const classItem = await Class.findById(id);

    if (!classItem) {
      return res.status(404).json({ message: 'Class not found' });
    }

    await classItem.remove();
    res.json({ message: 'Class deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Filter classes based on type, duration, and schedule
export const filterClasses = async (req, res) => {
  const { type, duration, schedule } = req.query;

  try {
    const query = {};
    if (type) query.type = type;
    if (duration) query.duration = duration;
    if (schedule) query.schedule = { $regex: schedule, $options: 'i' };

    const classes = await Class.find(query).populate('trainer', 'name');
    res.json(classes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
