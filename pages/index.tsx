import type { NextPage } from 'next';

import Link from 'next/link';

const mainMenu = [
  {
    label: '1 - React Components using TypeScript',
    href: '/01-js-to-ts',
  },
  {
    label: '2 - Mutually exclusive props',
    href: '/02-mutually-exclusive',
  },
  {
    label: '3 - More strict features',
    href: '/03-more-strict',
  },
  {
    label: '4 - Validating data at the boundary',
    href: '/04-validating-ajax-data',
  },
  {
    label: '5 - Inferring TypeScript types',
    href: '/05-inferring-types',
  },
  {
    label: '6 - Generic React prop types',
    href: '/06-generic-prop-types',
  },
  {
    label: '7 - Deriving component prop types',
    href: '/07-deriving-prop-types',
  },
  {
    label: '8 - Inferring Zod schema types',
    href: '/08-inferring-schema-types',
  },
  {
    label: '9 - Type mapping with Omit<> and/or Pick<>',
    href: '/09-type-mapping',
  },
  {
    label: '10 - Using Readonly<>',
    href: '/10-using-readonly',
  },
  {
    label: '11 - Custom type mapping DeepReadonly<>',
    href: '/11-using-deep-readonly',
  },
  {
    label: '12 - Displaying types',
    href: '/12-displaying-types',
  },
  {
    label: '13 - Type predicate functions',
    href: '/13-predicates-assertions',
  },
  {
    label: '14 - Type assertion functions',
    href: '/13-predicates-assertions',
  },
  {
    label: '15 - Exhaustiveness checking',
    href: '/13-predicates-assertions',
  },
];

const Home: NextPage = () => {
  return (
    <ol className="nav flex-column">
      {mainMenu.map((item, index) => (
        <li key={index} className="nav-item">
          <Link href={item.href}>
            <a className="nav-link">{item.label}</a>
          </Link>
        </li>
      ))}
    </ol>
  );
};

export default Home;

const notString: string = '1';
console.log(notString);
