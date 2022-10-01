import type { NextPage } from 'next';
import { PizzaShop } from '../src/11-using-deep-readonly/pizza-shop';

const UsingDeepReadonly: NextPage = () => {
  return (
    <div>
      <h2 className="my-4">Custom type mapping DeepReadonly&lt;T&gt;</h2>

      <PizzaShop />
    </div>
  );
};

export default UsingDeepReadonly;
