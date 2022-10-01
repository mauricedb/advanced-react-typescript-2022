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
