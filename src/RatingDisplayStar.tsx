import * as React from 'react';
import classnames from 'classnames';

import './RatingDisplayStar.css';

import { StarProps } from './types';
import RatingDisplayStarContent from './RatingDisplayStarContent';

const RatingDisplayStar = ({ value, index, starRenderer }: StarProps) => {
  const hasFill = value > index;

  return (
    <div className="RatingDisplayStar">
      {hasFill && (
        <RatingDisplayStarContent //
          value={value}
          index={index}
          starRenderer={starRenderer}
          filled={true}
        />
      )}

      <RatingDisplayStarContent //
        value={value}
        index={index}
        starRenderer={starRenderer}
        filled={false}
      />
    </div>
  );
};

export default RatingDisplayStar;
