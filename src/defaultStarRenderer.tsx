import * as React from 'react';
import classnames from 'classnames';

import './defaultStarRenderer.css';

import { StarRendererFunction } from './types';

const defaultStarRenderer: StarRendererFunction = ({ type }) => {
  return (
    <div
      className={classnames('DefaultStarComponent', {
        colored: type === 'filled',
      })}
    >
      {String.fromCharCode(9733)}
    </div>
  );
};

export default defaultStarRenderer;
