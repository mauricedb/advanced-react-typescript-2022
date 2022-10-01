import Link from 'next/link';
import type { FC } from 'react';

export const Header: FC = () => (
  <header>
    <nav className="navbar">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">
            Advanced TypeScript for React developers
          </a>
        </Link>
      </div>
    </nav>
  </header>
);
