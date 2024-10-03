// middleware/index.js
import { authMiddleware, adminMiddleware, trainerMiddleware } from './authMiddleware.js';
import { errorMiddleware } from './errorMiddleware.js';
import { validateUserRegistration } from './validationMiddleware.js';


export {
  authMiddleware,
  adminMiddleware,
  trainerMiddleware,
  errorMiddleware,
  validateUserRegistration
};
