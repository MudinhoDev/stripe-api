import stripeClient from '../../Connection.js';

type DeleteProductInputs = {
  product_id: string;
};

const disableProduct = async ({ product_id }: DeleteProductInputs) => {
  const product = await stripeClient.products.update(product_id, {
    active: false,
  });

  return product;
};

export default disableProduct;
