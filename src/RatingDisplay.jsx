// @flow
import * as React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

import './RatingDisplay.css';
import RatingDisplayStar from './RatingDisplayStar';

import {
  StarRendererFunctionProps,
  StarRendererFunction,
  StarProps,
  RatingDisplayProps,
} from './types';

const defaultStarRenderer = (): React.Node => {
  return String.fromCharCode(9733);
};

const RatingDisplay = ({
  className,
  value = 0,
  numberStars = 5,
  fontSize = 34,
  starRenderer: starRendererProp,
  showRatingOnHover = false,
}: RatingDisplayProps) => {
  const starRenderer = starRendererProp || defaultStarRenderer;

  return (
    <div
      className={classnames('RatingDisplay', className)}
      title={showRatingOnHover ? value : undefined}
    >
      {[...Array(numberStars).keys()].map((i) => {
        return (
          <RatingDisplayStar
            key={`star-${i}`}
            value={value}
            index={i}
            fontSize={fontSize}
            starRenderer={starRenderer}
          />
        );
      })}
    </div>
  );
};

export default RatingDisplay;
