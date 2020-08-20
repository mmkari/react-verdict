import React, { useState } from 'react';

import styled, { keyframes } from 'styled-components';
import classnames from 'classnames';
import Rating from '../src/RatingDisplay';

const Examples = () => {
  return (
    <div>
      <h2>Example App...</h2>
      <Rating value={2.4} />
    </div>
  );
};

export default Examples;
