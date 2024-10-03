import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import Routes from './routes/index.js';
import { authMiddleware, adminMiddleware } from './middleware/authMiddleware.js';
import './models/index.js';  // Ensure MongoDB connection is established

const PORT = process.env.PORT || 8000;  // Use the port you've set or default to 8000
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Mounting the main router for API routes
app.use('/api', Routes); // All API routes will now start with /api

// Admin route with middleware
app.use('/admin', authMiddleware, adminMiddleware, (req, res) => {
  res.send('Admin Access');
});

// Health check route
app.get('/', (req, res) => res.send('<h1>Server is running</h1>'));

// Start the server
app.listen(PORT, () => console.log(`Server Running at port ${PORT}`));
