import express from 'express';
import 'dotenv/config';  // Load environment variables
import cors from 'cors';
import Routes from './routes/index.js';  // Importing main routes
import { authMiddleware, adminMiddleware } from './middleware/authMiddleware.js';  // Middleware for auth
import './models/index.js';  // Ensure MongoDB connection is established

const PORT = process.env.PORT || 8000;  // Use the port you've set or default to 8000
const app = express();

// Middleware
app.use(cors());  // Allow CORS
app.use(express.json());  // Parse incoming JSON requests

// Mounting the main router for API routes
app.use('/api', Routes); // All API routes will now start with /api

// Admin route with middleware
app.use('/admin', authMiddleware, adminMiddleware, (req, res) => {
  res.send('Admin Access');  // Responding for admin access
});

// Health check route
app.get('/', (req, res) => res.send('<h1>Server is running</h1>'));  // Simple health check

// Start the server
app.listen(PORT, () => console.log(`Server Running at port ${PORT}`));
