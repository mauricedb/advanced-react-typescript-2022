import { FC, useMemo, useState } from 'react';

import type {
  ExtraIngredient,
  ExtraIngredients,
  Pizza,
  PizzaOnOrder,
} from './types';

import { OrderedPizza } from './ordered-pizza';
import { PizzaOnMenu } from './pizza-on-menu';

type Props = {
  extraIngredients: ExtraIngredients;
  pizzas: Pizza[];
};

export const PizzaShop: FC<Props> = ({ extraIngredients, pizzas }) => {
  const [order, setOrder] = useState<PizzaOnOrder[]>([]);
  const totalPrice = useMemo(() => calculateTotalPrice(order), [order]);

  const getExtraIngredient = (name: string): ExtraIngredient =>
    extraIngredients[name]!;

  return (
    <div>
      <h3>Pizza Shop</h3>
      <div className="row">
        <div className="col">
          <h4>Menu</h4>
          {pizzas!.map((pizza) => (
            <PizzaOnMenu
              key={pizza.name}
              pizza={pizza}
              getExtraIngredient={getExtraIngredient}
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
              <div className="me-3">€{totalPrice}</div>
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
