import * as React from 'react';
import classnames from 'classnames';

import './RatingDisplayStar.css';

import { StarProps } from './types';
import RatingDisplayStarContent from './RatingDisplayStarContent';

const RatingDisplayStar = ({ value, index, starRenderer }: StarProps) => {
  const hasFill = value > index;

  return (
    <div className="RatingDisplayStar">
      {/* Render fill in front of empty star */}
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
