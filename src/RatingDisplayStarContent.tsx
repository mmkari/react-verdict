import * as React from 'react';
import classnames from 'classnames';
import { StarContentProps } from './types';

const RatingDisplayStarContent = ({
  value,
  index,
  starRenderer,
  filled,
}: StarContentProps) => {
  // Filled part may be partial
  const partial = filled && value - index < 1;

  return (
    <div
      className={classnames('RatingDisplayStarContent', { filled })}
      style={{ width: `${(partial ? value % 1 : 1) * 100}%` }}
    >
      {starRenderer({
        value,
        index,
        filled,
      })}
    </div>
  );
};

export default RatingDisplayStarContent;
