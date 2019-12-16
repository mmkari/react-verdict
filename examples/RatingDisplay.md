```jsx
import Rating from 'react-verdict';

const myStarRenderer = ({index}) => {
    return (String.fromCharCode(10022))
}

<Rating value={2.4} fontSize={55} numberStars={4} showRatingOnHover={true} starRenderer={myStarRenderer} />;
```
