import * as React from 'react';
import Rating from 'react-verdict';

const simpleRenderer = () => {
  return String.fromCharCode(9728);
};

export const SimpleRating = () => {
  return (
    <Rating //
      className="simpleRating"
      value={2.4}
      starRenderer={simpleRenderer}
      size={60}
    />
  );
};

export default SimpleRating;
