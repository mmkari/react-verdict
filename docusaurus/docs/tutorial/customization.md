---
sidebar_position: 5
---

import Link from '@docusaurus/Link';

# Customization

Configure `Rating` by wrapping it in another component that defines its default values. This is a good place to write your custom `starRenderer` function as well (<Link to="/docs/tutorial/props#starrenderer">see this section for details</Link>):

```jsx static a
import Rating from 'react-verdict';
import 'react-verdict/styles.css';

import classnames from 'classnames';

const myStarRenderer = ({ index, type }) => {
  return (
    <span style={{ color: type === 'filled' ? 'red' : '#DDDDDD' }}>
      {String.fromCharCode(10022)}
    </span>
  );
};

const MyCustomRating = ({
  //
  className,
  value,
  size = 55,
  numberStars = 4,
}) => (
  <Rating
    className={classnames('MyCustomRating', className)}
    value={value}
    size={size}
    numberStars={numberStars}
    showRatingOnHover={true}
    starRenderer={myStarRenderer}
  />
);
```
