import type { FC } from 'react';
import { BookOnSale } from './book-on-sale';
import { MagazineOnSale } from './magazine-on-sale';
import { PenOnSale } from './pen-on-sale';
import { assertBook, assertMagazine, ItemsOnSale } from './types';

type Props = {
  item: ItemsOnSale;
};

export const ItemOnSale: FC<Props> = ({ item }) => {
  switch (item.type) {
    case 'book':
      assertBook(item);
      return <BookOnSale book={item} />;
    case 'magazine':
      assertMagazine(item);
      return <MagazineOnSale magazine={item} />;
    // case 'pen':
    //   return <PenOnSale pen={item as Pen} />;
  }

  return null;
};
