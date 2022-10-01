import type { NextPage } from 'next';
import { TwoForms } from '../src/06-generic-prop-types/two-forms';

const InferringTypes: NextPage = () => {
  return (
    <div>
      <h2 className="my-4">Generic React prop types</h2>

      <TwoForms />
    </div>
  );
};

export default InferringTypes;
