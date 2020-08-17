// @flow
import * as React from 'react';
import styled from 'styled-components';
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
        <span className="RatingDisplayStar-colored">
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

const StyledRatingDisplayStar = styled(RatingDisplayStar)`
  //   position: relative;
  //   align-self: center;
  //   color: lightgray;
  //   z-index: 10;
  font-size: ${({ fontSize }) => fontSize}px;

  .RatingDisplayStar-colored {
    position: absolute;
    width: ${({ value, index }) => Math.min(value - index, 1) * 100}%;
    z-index: 11;
    overflow: hidden;
    color: orange;
  }
`;

export default StyledRatingDisplayStar;
