```jsx
import Rating from 'react-verdict';

const myStarRenderer = ({ index, type }) => {
  return (
    <span style={{ color: type === 'filled' ? 'red' : '#DDDDDD' }}>
      {String.fromCharCode(10022)}
    </span>
  );
};

<Rating
  value={2.4}
  size={55}
  numberStars={4}
  showRatingOnHover={true}
  starRenderer={myStarRenderer}
/>;
```
