// utils/recommendationEngine.js
import Class from '../models/Class.js';

// Sample function for recommending classes based on user preferences
export const recommendClasses = async (userPreferences) => {
  try {
    // Example: Recommend classes based on type and duration
    const recommendations = await Class.find({
      type: { $in: userPreferences.types },
      duration: { $lte: userPreferences.maxDuration }
    }).limit(10); // Adjust the limit as needed
    return recommendations;
  } catch (error) {
    console.error('Error recommending classes:', error);
    throw new Error('Error recommending classes');
  }
};

// Optional: Add more recommendation-related functions as needed
