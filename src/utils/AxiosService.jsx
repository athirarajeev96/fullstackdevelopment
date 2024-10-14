import axios from 'axios';

// Set the base URL for your API
const baseURL = 'http://localhost:8000/api'; // Adjust this based on your backend setup

const AxiosService = axios.create({
  baseURL, // Set base URL
  headers: {
    'Content-Type': 'application/json',
    // Add other headers if necessary
  }
});

// Optionally add interceptors for token handling
AxiosService.interceptors.request.use(config => {
  const token = localStorage.getItem('token'); // Adjust based on your authentication method
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default AxiosService;