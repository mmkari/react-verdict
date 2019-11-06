import React from 'react';
import Rating from '../src/RatingDisplay';

const Examples = () => {
  return (
    <div>
      <h2>Default</h2>
      <Rating rating={2.4} />

      <h2>Larger font-size</h2>
      <Rating rating={2.4} fontSize={50} />

      <h2>Different number of stars</h2>
      <Rating rating={2.4} numberStars={3} />

      <h2>Shows rating on hover</h2>
      <Rating rating={2.4} showRatingOnHover />

      <h2>Custom star-renderer</h2>
      <Rating rating={2.4} starRenderer={() => String.fromCharCode(9705)} />
    </div>
  );
};

export default Examples;
