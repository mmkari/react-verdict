import * as React from 'react';
import classnames from 'classnames';

import './RatingDisplay.css';
import RatingDisplayStar from './RatingDisplayStar';
import defaultStarRenderer from './defaultStarRenderer';

import {
  StarRendererFunctionProps,
  StarRendererFunction,
  StarProps,
  RatingDisplayProps,
} from './types';

const RatingDisplay = ({
  className,
  value = 0,
  numberStars = 5,
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
      {[...Array(numberStars).keys()].map((i) => {
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
