export type Book = {
  type: string;
  title: string;
  description: string;
};

export type Magazine = {
  type: string;
  title: string;
};

export type Pen = {
  type: string;
  color: string;
};

export type ItemsOnSale = Book | Magazine | Pen;

export function isBook(item: ItemsOnSale): item is Book {
  return item.type === 'book';
}

export function isMagazine(item: ItemsOnSale): item is Magazine {
  return item.type === 'magazine';
}

export function isPen(item: ItemsOnSale): item is Pen {
  return item.type === 'pen';
}

export function assertBook(item: ItemsOnSale): asserts item is Book {
  if (!isBook(item)) {
    throw new Error('Item is not a book');
  }
}

export function assertMagazine(item: ItemsOnSale): asserts item is Magazine {
  if (!isMagazine(item)) {
    throw new Error('Item is not a magazine');
  }
}

export function assertPen(item: ItemsOnSale): asserts item is Pen {
  if (!isPen(item)) {
    throw new Error('Item is not a pen');
  }
}
