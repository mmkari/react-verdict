import * as React from 'react';
import Rating from 'react-verdict';

const StarSvg = ({ fill }: { fill: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="34"
    viewBox="0 0 184.1 175.1"
  >
    <path
      strokeWidth="0.9"
      d="m92.1 0c7.2 22.3 14.5 44.6 21.7 66.9 23.4 0 46.9 0 70.3 0-19 13.8-37.9 27.6-56.9 41.3 7.2 22.3 14.5 44.6 21.7 66.9C130 161.3 111 147.6 92.1 133.8 73.1 147.6 54.1 161.3 35.2 175.1 42.4 152.8 49.7 130.5 56.9 108.2 37.9 94.5 19 80.7 0 66.9 23.4 66.9 46.9 66.9 70.3 66.9 77.6 44.6 84.8 22.3 92.1 0Z"
      fill={fill}
    />
  </svg>
);

const starRenderer = ({ value, index, filled }) => {
  const filledColor = '#00FF10';
  const emptyColor = '#DCFFB0';

  const fill = filled ? filledColor : emptyColor;

  const animationLength = 1.5; // s

  return (
    <div //
      className="starContainer"
      style={{
        animationDuration: `${Math.min(value - index, 1) * (animationLength / value)}s`,
        animationTimingFunction:
          value - index < 1 ? 'cubic-bezier(0,0,0,1)' : 'linear',
        animationDelay: `${index * (animationLength / value)}s`,
      }}
    >
      <StarSvg fill={fill} />
    </div>
  );
};

export const SimpleRating = () => {
  return (
    <Rating //
      className="simpleRating"
      value={2.4}
      starRenderer={starRenderer}
      size={60}
    />
  );
};

const ParentComponent = () => {
  const [mounted, setMounted] = React.useState(false);
  return (
    <div style={{ display: 'flex', height: '50px', alignItems: 'center' }}>
      <button
        onClick={() => setMounted(!mounted)}
        style={{ marginRight: '5px' }}
      >
        {`Click to ${mounted ? 'unmount' : 'mount'}`}
      </button>
      {mounted && <SimpleRating />}
    </div>
  );
};

export default ParentComponent;
