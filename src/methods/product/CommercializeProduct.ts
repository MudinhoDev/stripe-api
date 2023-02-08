import stripeClient from '../../Connection.js';

type CommercializeProductInputs = {
  productId: string;
  currency: string;
  unitAmount: number;
};

const commercializeProduct = async ({
  productId,
  currency,
  unitAmount,
}: CommercializeProductInputs) => {
  const price = await stripeClient.prices.create({
    active: true,
    product: productId,
    currency: currency,
    unit_amount: unitAmount,
  });

  const product = await stripeClient.products.update(productId, {
    active: true,
    default_price: price.id,
  });

  return product;
};

export default commercializeProduct;
