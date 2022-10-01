import type { NextPage } from 'next';
import { PizzaShop } from '../src/03-more-strict/pizza-shop';

const MoreStrict: NextPage = () => {
  return (
    <div>
      <h2 className="my-4">More strict features</h2>

      <PizzaShop />
    </div>
  );
};

export default MoreStrict;
