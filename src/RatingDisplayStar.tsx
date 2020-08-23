import * as React from 'react';
import classnames from 'classnames';

import './RatingDisplayStar.css';

import {
  StarRendererFunctionProps,
  StarRendererFunction,
  StarProps,
  RatingDisplayProps,
} from './types';

const RatingDisplayStar = ({ value, index, starRenderer }: StarProps) => {
  const colored = value > index;

  return (
    <div className="RatingDisplayStar">
      {colored && (
        <span
          className={classnames('RatingDisplayStar-colored', {
            partial: value - index < 1,
          })}
        >
          {starRenderer({
            value,
            index,
            type: 'filled',
          })}
        </span>
      )}
      {starRenderer({ value, index, type: 'empty' })}
    </div>
  );
};

export default RatingDisplayStar;
