import type { FC } from 'react';
import type { DeepReadonly, PizzaOnOrder } from './types';

import { useIntl } from 'react-intl';

type Props = {
  pizza: DeepReadonly<PizzaOnOrder>;
};

export const OrderedPizza: FC<Props> = ({ pizza }) => {
  const { formatNumber } = useIntl();

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h4 className="card-title d-flex justify-content-between">
          <div className="text-capitalize">{pizza.name}</div>
          <div>
            {formatNumber(pizza.price, {
              style: 'currency',
              currency: 'EUR',
            })}
          </div>
        </h4>
        <ol>
          {pizza.extraIngredients.map((extra, index) => (
            <li key={index} className="d-flex justify-content-between">
              <div className="text-capitalize">{extra.name}</div>
              <div>
                {formatNumber(extra.price, {
                  style: 'currency',
                  currency: 'EUR',
                })}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
