import type { FC } from 'react';
import { BookOnSale } from './book-on-sale';
import { MagazineOnSale } from './magazine-on-sale';
import { PenOnSale } from './pen-on-sale';
import { isBook, isMagazine, ItemsOnSale } from './types';

type Props = {
  item: ItemsOnSale;
};

export const ItemOnSale: FC<Props> = ({ item }) => {
  if (isBook(item)) {
    return <BookOnSale book={item} />;
  } else if (isMagazine(item)) {
    return <MagazineOnSale magazine={item} />;
  }
  // case 'pen':
  //   return <PenOnSale pen={item as Pen} />;

  return null;
};
