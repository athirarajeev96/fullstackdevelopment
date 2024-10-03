// routes/classRoutes.js
import express from 'express';
import { 
    createClass, 
    getClasses, 
    getClassById, 
    updateClass, 
    deleteClass, 
    filterClasses 
} from '../controllers/classController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

// Create a new class (accessible by trainers/admin)
router.post('/', authMiddleware, createClass);

// Get all classes (accessible by all users)
router.get('/', getClasses);

// Get a specific class by ID
router.get('/:id', getClassById);

// Update class details (accessible by trainers/admin)
router.put('/:id', authMiddleware, updateClass);

// Delete a class (accessible by trainers/admin)
router.delete('/:id', authMiddleware, deleteClass);

// Filter classes based on type, duration, and time slots
router.get('/filter', filterClasses);

export default router;
