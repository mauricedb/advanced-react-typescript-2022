import type { NextPage } from 'next';
import { PizzaShopDataLoader } from '../src/08-inferring-schema-types/pizza-shop-data-loader';

const InferringSchemaTypes: NextPage = () => {
  return (
    <div>
      <h2 className="my-4">Inferring Zod schema types</h2>

      <PizzaShopDataLoader />
    </div>
  );
};

export default InferringSchemaTypes;
