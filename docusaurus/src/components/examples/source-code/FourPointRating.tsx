import * as React from 'react';
import Rating from 'react-verdict';

const starRenderer = () => {
  return String.fromCharCode(10022);
};

export const FourPointRating = () => {
  return (
    <Rating //
      className="fourPointRating"
      value={2.6}
      starCount={4}
      starRenderer={starRenderer}
      size={55}
    />
  );
};

export default FourPointRating;
