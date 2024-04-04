import * as React from 'react';
import classnames from 'classnames';

import './RatingDisplayStar.css';

import { StarProps } from './types';
import RatingDisplayStarContent from './RatingDisplayStarContent';

const RatingDisplayStar = ({ value, index, starRenderer }: StarProps) => {
  const hasFill = value > index;

  const partial = value - index < 1;

  return (
    <div className="RatingDisplayStar">
      {hasFill && (
        <RatingDisplayStarContent //
          value={value}
          index={index}
          starRenderer={starRenderer}
          filled={true}
          style={{ width: `${(partial ? value % 1 : 1) * 100}%` }}
        />
      )}

      <RatingDisplayStarContent //
        value={value}
        index={index}
        starRenderer={starRenderer}
        filled={false}
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default RatingDisplayStar;
