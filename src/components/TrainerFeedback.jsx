import React, { useState, useEffect } from 'react';
import AxiosService from '../utils/AxiosService';
import ApiRoutes from '../utils/ApiRoutes';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TrainerFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [trainers, setTrainers] = useState([]);
  const [selectedTrainer, setSelectedTrainer] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await fetchTrainers();
      await fetchFeedbacks();
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
        value: trainer._id,
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

  const fetchFeedbacks = async () => {
    try {
      const { data } = await AxiosService.get(ApiRoutes.GET_FEEDBACKS.path, {
        authenticate: ApiRoutes.GET_FEEDBACKS.auth,
      });
      setFeedbacks(data);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
      toast.error(error.response?.data?.message || 'Error fetching feedbacks');
    }
  };

  const handleFeedbackSubmit = async () => {
    if (!selectedTrainer || rating === 0 || !comment) {
      toast.error("Please fill in all fields to submit feedback.");
      return;
    }
    try {
      setIsLoading(true);
      console.log('Submitting feedback with:', { trainerId: selectedTrainer, rating, comment }); // Log data being sent
      await AxiosService.post(
        ApiRoutes.SUBMIT_FEEDBACK.path,
        { trainerName: selectedTrainer, rating, comment }, // Change trainerId to trainerName if needed
        { authenticate: ApiRoutes.SUBMIT_FEEDBACK.auth }
      );
      
      toast.success("Feedback submitted successfully!");
      setSelectedTrainer('');
      setRating(0);
      setComment('');
      await fetchFeedbacks(); // Refresh feedback list
    } catch (error) {
      console.error("Error submitting feedback:", error); // Log the error object
      toast.error(error.response?.data?.message || "Error submitting feedback");
    } finally {
      setIsLoading(false);
    }
  };
  
  const getTrainerName = (trainerId) => {
    const trainer = trainers.find(t => t.value === trainerId);
    return trainer ? trainer.label : 'Unknown Trainer';
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="star-rating">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`star ${index < rating ? '' : 'star-empty'}`}
          >
            ★
          </span>
        ))}
      </div>
    );
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
        <div>
          <label htmlFor="trainerSelect" className="trainer-feedback-label">Select Trainer</label>
          <select
            id="trainerSelect"
            className="trainer-feedback-input"
            value={selectedTrainer}
            onChange={(e) => setSelectedTrainer(e.target.value)}
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
          />

          <label htmlFor="comment" className="trainer-feedback-label">Comment</label>
          <textarea
            id="comment"
            className="trainer-feedback-input"
            rows="4"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <button
            className="trainer-feedback-button"
            onClick={handleFeedbackSubmit}
          >
            Submit Feedback
          </button>
        </div>

        {/* Feedback Display */}
        <div className="trainer-feedback-display">
          <h3 className="trainer-feedback-title">Existing Feedbacks</h3>
          {feedbacks.length > 0 ? (
            feedbacks.map((feedback) => (
              <div key={feedback._id} className="trainer-feedback-item">
                <h4>{getTrainerName(feedback.trainerId)}</h4>
                <p><strong>Trainer ID:</strong> {feedback.trainerId}</p>
                <StarRating rating={feedback.rating} />
                <p className="trainer-feedback-comment"><strong>Comment:</strong> {feedback.comment}</p>
              </div>
            ))
          ) : (
            <p className="trainer-feedback-comment">No feedbacks available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrainerFeedback;
