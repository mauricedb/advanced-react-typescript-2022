import type { NextPage } from 'next';
import { PizzaShop } from '../src/12-displaying-types/pizza-shop';

const DisplayingTypes: NextPage = () => {
  return (
    <div>
      <h2 className="my-4">Displaying types</h2>

      <PizzaShop />
    </div>
  );
};

export default DisplayingTypes;
