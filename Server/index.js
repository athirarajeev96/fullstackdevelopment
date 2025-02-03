import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import Routes from './routes/index.js';

const PORT = process.env.PORT;
const app = express();

// CORS configuration
const allowedOrigins = [
  'https://exquisite-hummingbird-845c16.netlify.app', // Add your frontend URL here
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      // Allow requests from the specified frontend URL or from localhost (for development)
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(Routes);

app.listen(PORT, () => console.log(`Server Running at port ${PORT}`));
