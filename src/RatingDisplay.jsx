// @flow
import * as React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

const defaultStarRenderer = (): React.Node => {
  return String.fromCharCode(9733);
};

type StarRendererFunctionProps = {|
  /** current rating value */
  value: number,
  /** index of star */
  index: number,
  /** type of star to be rendered (background or foreground star) */
  type: 'front' | 'rear',
|};
type StarRendererFunction = (StarRendererFunctionProps) => React.Node;
type StarProps = {|
  className: string,
  /** current rating value */
  value: number,
  /** index of star */
  index: number,
  /** star-renderer function */
  starRenderer: StarRendererFunction,
|};
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
  position: relative;
  align-self: center;
  color: lightgray;
  z-index: 10;
  font-size: ${({ fontSize }) => fontSize}px;

  .RatingDisplayStar-colored {
    position: absolute;
    width: ${({ value, index }) => Math.min(value - index, 1) * 100}%;
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
  /** current rating value of the display */
  value?: number,
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
  value = 0,
  numberStars = 5,
  fontSize = 34,
  starRenderer: starRendererProp,
  showRatingOnHover = false,
}: RatingDisplayProps) => {
  const starRenderer = starRendererProp || defaultStarRenderer;

  return (
    <StarContainer
      className={classnames('RatingDisplay', className)}
      title={showRatingOnHover ? value : undefined}
    >
      {[...Array(numberStars).keys()].map((i) => {
        return (
          <StyledRatingDisplayStar
            key={`star-${i}`}
            value={value}
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
