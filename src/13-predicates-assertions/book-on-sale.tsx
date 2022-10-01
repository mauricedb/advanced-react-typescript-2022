import Image from 'next/image';
import type { FC } from 'react';
import bookImage from './images/book.png';
import { Book } from './types';

type Props = {
  book: Book;
};

export const BookOnSale: FC<Props> = ({ book }) => {
  return (
    <div className="card mb-3">
      <Image src={bookImage} alt={book.title} className="card-img-top" />
      <div className="card-body">
        <h4 className="card-title text-capitalize mb-3">{book.title}</h4>
        <p className="card-text">{book.description}</p>
        <div className="mb-3">
          <button className="btn btn-secondary">Add</button>
        </div>
      </div>
    </div>
  );
};
