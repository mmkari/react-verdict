import * as React from 'react';
import classnames from 'classnames';
import { StarContentProps } from './types';

const RatingDisplayStarContent = ({
  value,
  index,
  starRenderer,
  filled,
  style,
}: StarContentProps) => (
  <div
    className={classnames('RatingDisplayStarContent', { filled })}
    style={style}
  >
    {starRenderer({
      value,
      index,
      type: filled ? 'filled' : 'empty',
    })}
  </div>
);

export default RatingDisplayStarContent;
