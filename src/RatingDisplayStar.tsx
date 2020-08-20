import * as React from 'react';
import classnames from 'classnames';

import './RatingDisplayStar.css';

import {
  StarRendererFunctionProps,
  StarRendererFunction,
  StarProps,
  RatingDisplayProps,
} from './types';

const RatingDisplayStar = ({
  className,
  value,
  index,
  starRenderer,
}: StarProps) => {
  const colored = value > index; // has colored front if rating exceeds index value

  return (
    <div className={classnames('RatingDisplayStar', className)}>
      {colored && (
        <span
          className={classnames('RatingDisplayStar-colored', {
            partial: value - index < 1,
          })}
        >
          {starRenderer({
            value,
            index,
            type: 'front',
          })}
        </span>
      )}
      {starRenderer({ value, index, type: 'rear' })}
    </div>
  );
};

export default RatingDisplayStar;
