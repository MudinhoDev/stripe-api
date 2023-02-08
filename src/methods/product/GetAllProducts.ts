import stripeClient from '../../Connection.js';

const getAllProducts = async () => {
  const request = await stripeClient.products.list();

  const data = request.data;

  return data;
};

export default getAllProducts;
