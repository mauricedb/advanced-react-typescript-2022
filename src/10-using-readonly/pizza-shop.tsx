import type { PizzaOnOrder } from './types';

import { FC, useMemo, useState } from 'react';
import { useIntl } from 'react-intl';
import { pizzas } from './menu';
import { OrderedPizza } from './ordered-pizza';
import { PizzaOnMenu } from './pizza-on-menu';

export const PizzaShop: FC = () => {
  const { formatNumber } = useIntl();
  const [order, setOrder] = useState<PizzaOnOrder[]>([]);
  const totalPrice = useMemo(() => calculateTotalPrice(order), [order]);

  const onPlaceOrder = () => {
    const extrasForAEuro = order.flatMap((pizza) =>
      pizza.extraIngredients.filter((extra) => extra.price === 1)
    );
    console.log('Extras for a Euro', extrasForAEuro);

    pizzas.push({
      name: `New Pizza ${new Date().toLocaleTimeString()}`,
      price: 10,
      extras: ['cheese'],
      ingredients: ['tomato sauce'],
    });

    if (pizzas[0]) {
      pizzas[0].price *= 10;
    }

    setOrder([]);
  };

  return (
    <div>
      <h3>Pizza Shop</h3>
      <div className="row">
        <div className="col">
          <h4>Menu</h4>
          {pizzas.map((pizza) => (
            <PizzaOnMenu
              key={pizza.name}
              pizza={pizza}
              onAddToOrder={(p) => setOrder((order) => [...order, p])}
            />
          ))}
        </div>
        <div className="col">
          <div className="position-sticky top-0">
            <h4>Your Order</h4>
            {order.map((pizza, index) => (
              <OrderedPizza key={index} pizza={pizza} />
            ))}
            <div className="d-flex justify-content-between fw-bold fs-5">
              <div className="ms-3">Total amount: </div>
              <div className="me-3">
                {formatNumber(totalPrice, {
                  style: 'currency',
                  currency: 'EUR',
                })}
              </div>
            </div>
            <div>
              <button
                className="btn btn-primary mt-3"
                disabled={!order.length}
                onClick={onPlaceOrder}
              >
                Place your Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function calculateTotalPrice(order: PizzaOnOrder[]) {
  return order.reduce(
    (sum, pizza) =>
      sum +
      pizza.price +
      pizza.extraIngredients.reduce((sum, extra) => sum + extra.price, 0),
    0
  );
}
