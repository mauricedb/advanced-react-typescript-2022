import type { NextPage } from 'next';
import { PizzaShopDataLoader } from '../src/07-deriving-prop-types/pizza-shop-data-loader';

const DerivingPropTypes: NextPage = () => {
  return (
    <div>
      <h2 className="my-4">Deriving component prop types</h2>

      <PizzaShopDataLoader />
    </div>
  );
};

export default DerivingPropTypes;
