import type { NextPage } from 'next';
import { PizzaShopDataLoader } from '../src/04-validating-ajax-data/pizza-shop-data-loader';

const ValidatingAjaxData: NextPage = () => {
  return (
    <div>
      <h2 className="my-4">Validating data at the boundary</h2>

      <PizzaShopDataLoader />
    </div>
  );
};

export default ValidatingAjaxData;
