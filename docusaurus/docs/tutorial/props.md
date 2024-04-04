---
sidebar_position: 3
---

import { PropTable } from '@site/src/components/PropTable';

# Props

## RatingDisplay

`react-verdict` accepts the following props:

<PropTable name="RatingDisplay" />

The `starRenderer` prop is an optional prop for a custom star renderer. It can be used to further customize the content of each star button.

## StarRenderer

The `RatingDisplay` component renders the content for each star using the `starRenderer` function. It gets called with the following parameters:

```js static
{
  value: number; // rating value
  index: number; // zero-based index of the rendered star
  type: 'filled' | 'empty'; // type of star to be rendered
}
```

:::note

`starRenderer` is an optional prop useful for changing the rendered star icon. For simply changing the styles of the default star, see [this section on styling](styling).

:::

<!-- <PropTable name="defaultStarRenderer" /> -->
