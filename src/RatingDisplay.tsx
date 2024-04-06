import * as React from 'react';
import classnames from 'classnames';

import './RatingDisplay.css';
import RatingDisplayStar from './RatingDisplayStar';
import defaultStarRenderer from './defaultStarRenderer';

import { RatingDisplayProps } from './types';

const RatingDisplay = ({
  className,
  value,
  starCount = 5,
  size = 34,
  starRenderer = defaultStarRenderer,
  showRatingOnHover = false,
}: RatingDisplayProps) => {
  return (
    <div
      style={{ fontSize: `${size}px` }}
      className={classnames('RatingDisplay', className)}
      title={showRatingOnHover ? String(value) : undefined}
    >
      {[...Array(starCount).keys()].map((i) => {
        return (
          <RatingDisplayStar
            key={`star-${i}`}
            value={value}
            index={i}
            starRenderer={starRenderer}
          />
        );
      })}
    </div>
  );
};

export default RatingDisplay;
