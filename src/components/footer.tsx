import type { FC } from 'react';

export const Footer: FC = () => (
  <footer className="text-center">
    &copy; {new Date().getFullYear()} ABL - The Problem Solver
  </footer>
);
