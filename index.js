import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import Routes from './routes/index.js';
import { authMiddleware, adminMiddleware } from './middleware/authMiddleware.js';
import './models/index.js';  // Ensure MongoDB connection is established

const PORT = process.env.PORT || 8000;
const FRONTEND_URL = process.env.FRONTEND_URL; // Add your frontend deployed URL to environment variables
const app = express();

// Middleware
app.use(cors({
  origin: FRONTEND_URL, // Allow only your frontend's deployed URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
  credentials: true, // Set to true if you need to allow credentials like cookies, authorization headers, etc.
}));
app.use(express.json());

// Mounting the main router for API routes
app.use('/api', Routes);

// Admin route with middleware
app.use('/admin', authMiddleware, adminMiddleware, (req, res) => {
  res.send('Admin Access');
});

// Health check route
app.get('/', (req, res) => res.send('<h1>Server is running</h1>'));

// Start the server
app.listen(PORT, () => console.log(`Server Running at port ${PORT}`));
