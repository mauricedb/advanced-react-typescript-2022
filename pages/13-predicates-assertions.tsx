import type { NextPage } from 'next';
import { BookShop } from '../src/13-predicates-assertions/book-shop';

const PredicatesAssertions: NextPage = () => {
  return (
    <div>
      <h2 className="my-4">Predicates, Assertions & Exhaustiveness Checking</h2>
      <BookShop />
    </div>
  );
};

export default PredicatesAssertions;
