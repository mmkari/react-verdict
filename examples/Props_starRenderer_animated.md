```jsx
import React, { useState } from 'react';
import Rating from 'react-verdict';
import classnames from 'classnames';

import styled, { keyframes } from 'styled-components';

const CustomStarRendererStar = ({ className, color, index, type }) => {
  const frontColor = '#00FF10';
  const backColor = '#DCFFB0';

  return (
    <div
      className={classnames('CustomStarRendererStar', className, {
        colored: type === 'front',
      })}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        viewBox="0 0 184.1 175.1"
      >
        <path
          strokeWidth="0.9"
          d="m92.1 0c7.2 22.3 14.5 44.6 21.7 66.9 23.4 0 46.9 0 70.3 0-19 13.8-37.9 27.6-56.9 41.3 7.2 22.3 14.5 44.6 21.7 66.9C130 161.3 111 147.6 92.1 133.8 73.1 147.6 54.1 161.3 35.2 175.1 42.4 152.8 49.7 130.5 56.9 108.2 37.9 94.5 19 80.7 0 66.9 23.4 66.9 46.9 66.9 70.3 66.9 77.6 44.6 84.8 22.3 92.1 0Z"
          fill={type === 'front' ? frontColor : backColor}
        />
      </svg>
    </div>
  );
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
`;
const colorFill = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

// color fill animation length
const animationLength = 1.5; // s

const StyledCustomStarRendererStar = styled(CustomStarRendererStar)`
  transition: width 1s;
  animation: ${fadeIn} 0.5s;
  &.colored {
    width: 0; // start state for animation
    overflow: hidden;
    animation: ${colorFill} ${({ index, value }) =>
        Math.min(value - index, 1) * (animationLength / value)}s;
    animation-timing-function: ${({ index, value }) =>
      value - index < 1 ? 'cubic-bezier(0,0,0,1)' : 'linear'};
    animation-fill-mode: forwards;
    animation-delay: ${({ index, value }) =>
      index * (animationLength / value)}s;
  }
`;
const customStarRenderer = (props) => (
  <StyledCustomStarRendererStar {...props} />
);

const ParentComponent = () => {
  const [mounted, setMounted] = useState(false);
  return (
    <div style={{ display: 'flex', height: '50px', alignItems: 'center' }}>
      <button
        onClick={() => setMounted(!mounted)}
        style={{ marginRight: '5px' }}
      >
        {`Click to ${mounted ? 'unmount' : 'mount'}`}
      </button>
      {mounted && (
        <Rating
          value={2.4}
          starRenderer={customStarRenderer}
          showRatingOnHover
        />
      )}
    </div>
  );
};

<ParentComponent />;
```
