import type { NextPage } from 'next';
import { PizzaShopDataLoader } from '../src/09-type-mapping/pizza-shop-data-loader';

const TypeMapping: NextPage = () => {
  return (
    <div>
      <h2 className="my-4">
        Type mapping with Omit&lt;&gt; and/or Pick&lt;&gt;
      </h2>

      <PizzaShopDataLoader />
    </div>
  );
};

export default TypeMapping;
