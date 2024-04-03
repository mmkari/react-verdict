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
  const isFilled = value > index;

  const partial = value - index < 1;

  return (
    <div className="RatingDisplayStar">
      {isFilled && (
        <div
          className={classnames('RatingDisplayStar-filled', {
            partial,
          })}
          style={{ width: `${(partial ? value % 1 : 1) * 100}%` }}
        >
          {starRenderer({
            value,
            index,
            type: 'filled',
          })}
        </div>
      )}
      <div className="RatingDisplayStar-empty">
        {starRenderer({ value, index, type: 'empty' })}
      </div>
    </div>
  );
};

export default RatingDisplayStar;
