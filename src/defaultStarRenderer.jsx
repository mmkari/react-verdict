import * as React from 'react';
import classnames from 'classnames';

import './defaultStarRenderer.css';

// import {} from './types';

const defaultStarRenderer = ({ type }): React.Node => {
  return (
    <div
      className={classnames('DefaultStarComponent', {
        colored: type === 'front',
      })}
    >
      {String.fromCharCode(9733)}
    </div>
  );
};

export default defaultStarRenderer;