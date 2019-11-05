import * as React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

const defaultStarRenderer = () => {
  return String.fromCharCode(9733);
};

const RatingDisplayStar = ({ className, rating, index, starRenderer }) => {
  const colored = rating > index;

  return (
    <div
      className={classnames('RatingDisplayStar', className, {
        colored,
      })}
    >
      {colored && (
        <span className="RatingDisplayStar-partial">
          {starRenderer({
            rating,
            index,
            className: 'colored',
            active: true,
          })}
        </span>
      )}
      {starRenderer({ rating, index, className: 'uncolored' })}
    </div>
  );
};

const StyledRatingDisplayStar = styled(RatingDisplayStar)`
  position: relative;
  align-self: center;
  color: lightgray;
  z-index: -1;
  font-size: ${({ fontSize }) => fontSize}px;

  .RatingDisplayStar-partial {
    position: absolute;
    width: ${({ rating, index }) => Math.min(rating - index, 1) * 100}%;
    // width: 50%;
    z-index: 1;
    overflow: hidden;
    color: orange;
  }

  //   &.colored {
  //     color: yellow;
  //   }
`;

const RatingDisplay = ({
  className,
  rating,
  numberStars: numberStarsProp,
  fontSize: fontSizeProp,
  starRenderer: starRendererProp,
  showRatingOnHover = false,
}) => {
  //
  const numberStars = numberStarsProp || 5;
  const fontSize = fontSizeProp || 34;

  const starRenderer = starRendererProp || defaultStarRenderer;

  return (
    <div
      className={classnames('RatingDisplay', className)}
      title={showRatingOnHover ? rating : undefined}
    >
      {[...Array(numberStars).keys()].map((i) => {
        return (
          <StyledRatingDisplayStar
            key={`star-${i}`}
            rating={rating}
            index={i}
            fontSize={fontSize}
            starRenderer={starRenderer}
          />
        );
      })}
    </div>
  );
};

const StyledRatingDisplay = styled(RatingDisplay)`
  display: flex;
  //   position: relative;
`;

export default StyledRatingDisplay;
