import type { NextPage } from 'next';
import { PizzaShop } from '../src/10-using-readonly/pizza-shop';

const UsingReadonly: NextPage = () => {
  return (
    <div>
      <h2 className="my-4">Using Readonly&lt;T&gt;</h2>

      <PizzaShop />
    </div>
  );
};

export default UsingReadonly;
