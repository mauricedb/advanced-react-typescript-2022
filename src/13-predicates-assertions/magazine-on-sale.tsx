import Image from 'next/image';
import type { FC } from 'react';
import magazineImage from './images/magazine.png';
import { Magazine } from './types';

type Props = {
  magazine: Magazine;
};

export const MagazineOnSale: FC<Props> = ({ magazine }) => {
  return (
    <div className="card mb-3">
      <Image
        src={magazineImage}
        alt={magazine.title}
        className="card-img-top"
      />
      <div className="card-body">
        <h4 className="card-title text-capitalize mb-3">{magazine.title}</h4>

        <div className="mb-3">
          <button className="btn btn-secondary">Add</button>
        </div>
      </div>
    </div>
  );
};
