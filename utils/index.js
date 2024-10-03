// utils/index.js
import { sendEmail } from './emailService.js';
import { createPaymentIntent } from './paymentService.js';
import { recommendClasses } from './recommendationEngine.js';

export {
  sendEmail,
  createPaymentIntent,
  recommendClasses
};
