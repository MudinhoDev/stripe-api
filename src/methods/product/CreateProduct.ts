import stripeClient from '../../Connection.js';

type CreateProductInputs = {
  name: string;
  description?: string;
};

const createProduct = async ({ name, description }: CreateProductInputs) => {
  const product = await stripeClient.products.create({
    name,
    description,
    active: false,
  });

  return product;
};

export default createProduct;
