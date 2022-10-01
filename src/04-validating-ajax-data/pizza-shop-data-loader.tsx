import type { FC } from 'react';
import useSWR from 'swr';

import type { ExtraIngredients, Pizza } from './types';

import { PizzaShop } from './pizza-shop';

const server = 'http://localhost:3000';

export const PizzaShopDataLoader: FC = () => {
  const { data: pizzas, error: pizzasError } = useSWR<Pizza[]>(
    '/api/pizzas.json',
    (resource, init) =>
      fetch(`${server}${resource}`, init).then((res) => res.json())
  );

  const { data: extraIngredients, error: extraIngredientsError } =
    useSWR<ExtraIngredients>(
      '/api/bad-extra-ingredients.json',
      (resource, init) =>
        fetch(`${server}${resource}`, init).then((res) => res.json())
    );

  if (pizzasError || extraIngredientsError) {
    return (
      <div className="alert alert-danger" role="alert">
        Something went wrong
        {pizzasError?.message ?? extraIngredientsError?.message}
      </div>
    );
  }

  if (!pizzas || !extraIngredients) {
    return (
      <div className="spinner-border text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return <PizzaShop extraIngredients={extraIngredients} pizzas={pizzas} />;
};
