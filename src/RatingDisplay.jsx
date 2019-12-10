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
    z-index: 11;
    overflow: hidden;
    color: orange;
  }
`;

const StarContainer = styled.div`
  display: flex;
`;

type RatingDisplayProps = {|
  /** custom class name */
  className?: string,
  /** value of the display */
  rating?: number,
  /** number of stars */
  numberStars: number,
  /** font-size of stars in pixels (when using default renderer) */
  fontSize: number,
  /** prop to override default renderer */
  starRenderer?: StarRendererFunction,
  /** shows rating value in a "title" attribute on hover */
  showRatingOnHover?: boolean,
|};
const RatingDisplay = ({
  className,
  rating = 0,
  numberStars = 5,
  fontSize = 34,
  starRenderer: starRendererProp,
  showRatingOnHover = false,
}: RatingDisplayProps) => {
  const starRenderer = starRendererProp || defaultStarRenderer;

  return (
    <StarContainer
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
    </StarContainer>
  );
};

export default RatingDisplay;
