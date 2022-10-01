import type { FC } from 'react';
import { ItemOnSale } from './item-on-sale';
import { ItemsOnSale } from './types';

const itemsOnSale: ItemsOnSale[] = [
  {
    type: 'book',
    title: 'The Hobbit',
    description:
      'The Hobbit is a wondrous tale of adventure and heroism set in the fantasy realm of middle-earth. Bilbo Baggins, an unambitious Hobbit is unwillingly recruited as a burglar by a party of dwarves and sent on a most extraordinary adventure. Coming head to head against trolls, goblins, wolves and the mighty dragon Smaug, Bilbo faces his worst fears, makes some unlikely allies, travels further than ever before and is changed, forever.',
  },
  { type: 'magazine', title: 'BYTE Magazine' },
  { type: 'pen', color: 'blue' },
];

export const BookShop: FC = () => (
  <div className="row">
    <h3 className="my-4">There are {itemsOnSale.length} items on sale</h3>
    {itemsOnSale.map((item, index) => (
      <div key={index} className="col-3">
        <ItemOnSale item={item} />
      </div>
    ))}
  </div>
);
