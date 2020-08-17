// @flow
import * as React from 'react';
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
  const inputRef = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    // set CSS custom property values for this component
    if (inputRef.current) {
      inputRef.current.style.setProperty(
        '--star-size',
        String(fontSize) + 'px'
      );
      inputRef.current.style.setProperty(
        '--partial-percentage',
        String((value % 1) * 100) + '%'
      );
    }
  }, [fontSize, value]);

  return (
    <div
      className={classnames('RatingDisplay', className)}
      title={showRatingOnHover ? value : undefined}
      ref={inputRef}
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
