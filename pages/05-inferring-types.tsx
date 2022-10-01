import type { NextPage } from 'next';
import { Configuration } from '../src/05-inferring-types/configuration';

const InferringTypes: NextPage = () => {
  return (
    <div>
      <h2 className="my-4">Inferring TypeScript types</h2>

      <Configuration />
    </div>
  );
};

export default InferringTypes;
