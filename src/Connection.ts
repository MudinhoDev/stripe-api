import StripeConfig from '../config/StripeConfig.js';
import StripeClient from 'stripe';

const stripeClient = new StripeClient(StripeConfig.secretKey, {
  apiVersion: '2022-11-15',
});

export default stripeClient;
