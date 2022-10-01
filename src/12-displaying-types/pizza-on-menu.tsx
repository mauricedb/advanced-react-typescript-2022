import type { DeepReadonly, Pizza, PizzaOnOrder } from './types';

import { FC, useState } from 'react';

import { useIntl } from 'react-intl';
import { LabeledCheckbox } from '../components';
import { getExtraIngredient } from './menu';

type Props = {
  pizza: DeepReadonly<Pizza>;
  onAddToOrder: (pizza: PizzaOnOrder) => void;
};

export const PizzaOnMenu: FC<Props> = ({ pizza, onAddToOrder }) => {
  const [extras, setExtras] = useState<string[]>([]);
  const { formatList } = useIntl();

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h4 className="card-title text-capitalize mb-3">{pizza.name}</h4>
        <div className="mb-3">
          <h5 className="card-title">Ingredients</h5>
          <div className="ms-1">
            {formatList(
              pizza.ingredients.map((ingredient) => (
                <span key={ingredient} className="text-capitalize">
                  {ingredient}
                </span>
              ))
            )}
          </div>
        </div>
        <div className="mb-3">
          <h5 className="card-title">Extras</h5>
          {pizza.extras.map((extra) => (
            <LabeledCheckbox
              key={extra}
              checked={extras.includes(extra)}
              onChange={() => {
                setExtras((extras) => {
                  if (extras.includes(extra)) {
                    return extras.filter((x) => x !== extra);
                  } else {
                    return [...extras, extra];
                  }
                });
              }}
            >
              <span className="text-capitalize">{extra}</span>
            </LabeledCheckbox>
          ))}
        </div>
        <button
          className="btn btn-secondary"
          onClick={() =>
            onAddToOrder({
              ...pizza,
              extraIngredients: extras.map(getExtraIngredient),
            })
          }
        >
          Add to order
        </button>
      </div>
    </div>
  );
};
