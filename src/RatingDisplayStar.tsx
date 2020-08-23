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
        <div
          className={classnames('RatingDisplayStar-filled', {
            partial: value - index < 1,
          })}
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
