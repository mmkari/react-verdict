<h1 align="center">react-verdict</h1>
<div align="center">
  
A customizable star rating **display**

[![npm version](https://img.shields.io/npm/v/react-verdict.svg)](https://www.npmjs.com/package/react-verdict)
[![npm license](https://img.shields.io/npm/l/react-verdict.svg)](https://github.com/mmkari/react-verdict/blob/master/LICENSE)

<img src=docs/banner_stars.png width=273 height=66 />
</div>

# Installation

`npm i react-verdict`

# Usage

```jsx
import Rating from 'react-verdict';

const Example = () => {
  return (
    <div>
      <Rating value={2.4} />
    </div>
  );
};
```

# Documentation

## Props

| Prop Name         | Description                                                        |
| ----------------- | ------------------------------------------------------------------ |
| value             | numeric value of the displayed rating                              |
| size              | numeric font-size of the rendered "star" characters                |
| numberStars       | number of "stars" in the display                                   |
| showRatingOnHover | boolean for showing the value in a hover tooltip (title attribute) |
| starRenderer      | custom function to override the default "star" renderer            |

[See examples in Styleguide.](https://mmkari.github.io/react-verdict/#/Props)
