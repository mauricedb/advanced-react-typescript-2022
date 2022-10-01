import Image from 'next/image';
import type { FC } from 'react';
import penImage from './images/pen.png';
import { Pen } from './types';

type Props = {
  pen: Pen;
};

export const PenOnSale: FC<Props> = ({ pen }) => {
  return (
    <div className="card mb-3">
      <Image
        src={penImage}
        alt={`A ${pen.color} pen`}
        className="card-img-top"
      />
      <div className="card-body">
        <h4 className="card-title text-capitalize mb-3">{`A ${pen.color} pen`}</h4>

        <div className="mb-3">
          <button className="btn btn-secondary">Add</button>
        </div>
      </div>
    </div>
  );
};
