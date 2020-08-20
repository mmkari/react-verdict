```jsx
import React, { useState } from 'react';
import Rating from 'react-verdict';
import classnames from 'classnames';

import styled, { keyframes } from 'styled-components';

const CustomStarRendererStar = ({ className, color, index, type }) => {
  return (
    <div
      className={classnames('CustomStarRendererStar', className, {
        colored: type === 'front',
      })}
    >
      {String.fromCharCode(9728)}
    </div>
  );
};

const StyledCustomStarRendererStar = styled(CustomStarRendererStar)`
  color: lightgray;
  &.colored {
    color: purple;
  }
`;
const customStarRenderer = (props) => (
  <StyledCustomStarRendererStar {...props} />
);

<Rating value={2.4} starRenderer={customStarRenderer} />;
```
