// @flow
import * as React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

const defaultStarRenderer = (): React.Node => {
  return String.fromCharCode(9733);
};

type StarRendererFunctionProps = {|
  rating: number,
  index: number,
  className: 'colored' | 'uncolored',
  active?: boolean,
|};
type StarRendererFunction = (StarRendererFunctionProps) => React.Node;
type StarProps = {|
  className: string,
  rating: number,
  index: number,
  starRenderer: StarRendererFunction,
|};
const RatingDisplayStar = ({
  className,
  rating,
  index,
  starRenderer,
}: StarProps) => {
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
  z-index: 10;
  font-size: ${({ fontSize }) => fontSize}px;

  .RatingDisplayStar-partial {
    position: absolute;
    width: ${({ rating, index }) => Math.min(rating - index, 1) * 100}%;
    // width: 50%;
    z-index: 11;
    overflow: hidden;
    color: orange;
  }

  //   &.colored {
  //     color: yellow;
  //   }
`;

type RatingDisplayProps = {|
  className: string,
  rating: number,
  numberStars: number,
  fontSize: number,
  starRenderer: StarRendererFunction,
  showRatingOnHover: boolean,
|};
const RatingDisplay = ({
  className,
  rating,
  numberStars: numberStarsProp,
  fontSize: fontSizeProp,
  starRenderer: starRendererProp,
  showRatingOnHover = false,
}: RatingDisplayProps) => {
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
