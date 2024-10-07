import axios from 'axios';

const axiosService = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL, // Set base URL here
    headers: {
        'Content-Type': 'application/json',
        // Add any other headers you might need, like Authorization
    },
});

axiosService.interceptors.response.use(
    (response) => {
        // Return the full response object
        return response; // This way you get the entire response, including status, headers, etc.
    },
    (error) => {
        if (error.response) {
            console.error("Error data:", error.response.data);
            console.error("Error status:", error.response.status);
            console.error("Error headers:", error.response.headers);
        } else if (error.request) {
            console.error("Error request:", error.request);
        } else {
            console.error('Error message:', error.message);
        }
        return Promise.reject(error);
    }
);

export default axiosService;
