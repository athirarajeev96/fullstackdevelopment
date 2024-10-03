// utils/paymentService.js
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createPaymentIntent = async (amount, currency = 'usd') => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method_types: ['card'],
    });
    return paymentIntent;
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw new Error('Error creating payment intent');
  }
};

// Optional: Add more payment-related functions as needed
