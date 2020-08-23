import * as React from 'react';

export type StarRendererFunctionProps = {
  /** current rating value */
  value: number;
  /** index of star */
  index: number;
  /** type of star to be rendered (background or foreground star) */
  type: 'filled' | 'empty';
};
export type StarRendererFunction = (
  StarRendererFunctionProps
) => React.ReactNode;
export type StarProps = {
  /** current rating value */
  value: number;
  /** index of star */
  index: number;
  /** star-renderer function */
  starRenderer: StarRendererFunction;
};

export type RatingDisplayProps = {
  /** custom class name */
  className?: string;
  /** current rating value of the display */
  value?: number;
  /** number of stars */
  numberStars: number;
  /** font-size of stars in pixels (when using default renderer) */
  size: number;
  /** prop to override default renderer */
  starRenderer?: StarRendererFunction;
  /** shows rating value in a "title" attribute on hover */
  showRatingOnHover?: boolean;
};
