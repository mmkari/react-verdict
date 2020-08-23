```jsx static
<Rating value={2.4} starRenderer={customStarRenderer} />
```

`starRenderer` functions receive the following parameters from `Rating`:

```js static
{
  value: number; // rating value
  index: number; // zero-based index of the rendered star
  type: 'filled' | 'empty'; // type of star to be rendered
}
```
