import React, { useState, useEffect } from 'react';
import AxiosService from '../utils/AxiosService';
import ApiRoutes from '../utils/ApiRoutes';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TrainerFeedback = () => {
  const [trainers, setTrainers] = useState([]);
  const [selectedTrainer, setSelectedTrainer] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await fetchTrainers();
    };
    fetchData();
  }, []);

  const fetchTrainers = async () => {
    try {
      setIsLoading(true);
      const { data } = await AxiosService.get(ApiRoutes.GET_ALL_TRAINERS.path, {
        authenticate: ApiRoutes.GET_ALL_TRAINERS.auth,
      });
      console.log('Fetched trainers:', data);
      const formattedTrainers = data.map((trainer) => ({
        value: trainer.name, // Use trainer name
        label: trainer.name,
      }));
      setTrainers(formattedTrainers);
    } catch (error) {
      console.error("Error fetching trainers:", error);
      toast.error(error.response?.data?.message || 'Error fetching trainers');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
  
    const feedbackData = { trainerName: selectedTrainer, rating, comment };
  
    try {
      const response = await AxiosService.post(ApiRoutes.SUBMIT_FEEDBACK.path, feedbackData);
  
      console.log('Feedback submitted:', response.data);
      toast.success('Feedback submitted successfully!');
      setRating(0);
      setComment('');
      setSelectedTrainer('');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      toast.error(error.response?.data?.message || 'Error submitting feedback');
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="trainer-feedback-container">
      <div className="trainer-feedback-form">
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
        <h2 className="trainer-feedback-title">Trainer Feedback</h2>

        {/* Feedback Form */}
        <form onSubmit={handleFeedbackSubmit}>
          <label htmlFor="trainerSelect" className="trainer-feedback-label">Select Trainer</label>
          <select
            id="trainerSelect"
            className="trainer-feedback-input"
            value={selectedTrainer}
            onChange={(e) => setSelectedTrainer(e.target.value)}
            required
          >
            <option value="">-- Select Trainer --</option>
            {trainers.map((trainer) => (
              <option key={trainer.value} value={trainer.value}>
                {trainer.label}
              </option>
            ))}
          </select>

          <label htmlFor="rating" className="trainer-feedback-label">Rating (1 to 5)</label>
          <input
            type="number"
            id="rating"
            className="trainer-feedback-input"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            required
          />

          <label htmlFor="comment" className="trainer-feedback-label">Comment</label>
          <textarea
            id="comment"
            className="trainer-feedback-input"
            rows="4"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />

          <button type="submit" className="trainer-feedback-button">
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default TrainerFeedback;
