import { body, param } from 'express-validator';

// Booking validation rules
export const bookingValidation = [
  body('classId').isString().notEmpty().withMessage('Class ID is required'),
  body('date').isISO8601().withMessage('Invalid date format'),
];

// General validation middleware to handle errors
export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
