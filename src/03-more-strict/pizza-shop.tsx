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

  return (
    <div>
      <h3>Pizza Shop</h3>
      <div className="row gap-3">
        <div className="col-3">
          <h4>Menu</h4>
          {pizzas.map((pizza) => (
            <PizzaOnMenu
              key={pizza.name}
              pizza={pizza}
              onAddToOrder={(p) => setOrder((order) => [...order, p])}
            />
          ))}
        </div>
        <div className="col-3">
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
          </div>
        </div>
      </div>
    </div>
  );
};

function calculateTotalPrice(order: PizzaOnOrder[]) {
  return order.reduce((sum, pizza) => {
    const extraPrice = pizza.extraIngredients.reduce(
      (sum, extra) => sum + extra.price,
      0
    );
    return sum + pizza.price + extraPrice;
  }, 0);
}
