"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./RatingDisplay.css");

var _RatingDisplayStar = _interopRequireDefault(require("./RatingDisplayStar"));

var _defaultStarRenderer = _interopRequireDefault(require("./defaultStarRenderer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var RatingDisplay = function RatingDisplay(_ref) {
  var className = _ref.className,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? 0 : _ref$value,
      _ref$numberStars = _ref.numberStars,
      numberStars = _ref$numberStars === void 0 ? 5 : _ref$numberStars,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 34 : _ref$size,
      starRendererProp = _ref.starRenderer,
      _ref$showRatingOnHove = _ref.showRatingOnHover,
      showRatingOnHover = _ref$showRatingOnHove === void 0 ? false : _ref$showRatingOnHove;
  var starRenderer = starRendererProp || _defaultStarRenderer["default"];
  var inputRef = React.createRef();
  React.useEffect(function () {
    // set CSS custom property values for this component
    if (inputRef.current) {
      inputRef.current.style.setProperty('--star-size', String(size) + 'px');
      inputRef.current.style.setProperty('--partial-percentage', String(value % 1 * 100) + '%');
    }
  }, [size, value]);
  return React.createElement("div", {
    className: (0, _classnames["default"])('RatingDisplay', className),
    title: showRatingOnHover ? value : undefined,
    ref: inputRef
  }, _toConsumableArray(Array(numberStars).keys()).map(function (i) {
    return React.createElement(_RatingDisplayStar["default"], {
      key: "star-".concat(i),
      value: value,
      index: i,
      starRenderer: starRenderer
    });
  }));
};

var _default = RatingDisplay;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SYXRpbmdEaXNwbGF5LnRzeCJdLCJuYW1lcyI6WyJSYXRpbmdEaXNwbGF5IiwiY2xhc3NOYW1lIiwidmFsdWUiLCJudW1iZXJTdGFycyIsInNpemUiLCJzdGFyUmVuZGVyZXJQcm9wIiwic3RhclJlbmRlcmVyIiwic2hvd1JhdGluZ09uSG92ZXIiLCJkZWZhdWx0U3RhclJlbmRlcmVyIiwiaW5wdXRSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiU3RyaW5nIiwidW5kZWZpbmVkIiwiQXJyYXkiLCJrZXlzIiwibWFwIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BT0k7QUFBQSxNQU54QkMsU0FNd0IsUUFOeEJBLFNBTXdCO0FBQUEsd0JBTHhCQyxLQUt3QjtBQUFBLE1BTHhCQSxLQUt3QiwyQkFMaEIsQ0FLZ0I7QUFBQSw4QkFKeEJDLFdBSXdCO0FBQUEsTUFKeEJBLFdBSXdCLGlDQUpWLENBSVU7QUFBQSx1QkFIeEJDLElBR3dCO0FBQUEsTUFIeEJBLElBR3dCLDBCQUhqQixFQUdpQjtBQUFBLE1BRlZDLGdCQUVVLFFBRnhCQyxZQUV3QjtBQUFBLG1DQUR4QkMsaUJBQ3dCO0FBQUEsTUFEeEJBLGlCQUN3QixzQ0FESixLQUNJO0FBQ3hCLE1BQU1ELFlBQVksR0FBR0QsZ0JBQWdCLElBQUlHLCtCQUF6QztBQUNBLE1BQU1DLFFBQVEsR0FBR0MsS0FBSyxDQUFDQyxTQUFOLEVBQWpCO0FBRUFELEVBQUFBLEtBQUssQ0FBQ0UsU0FBTixDQUFnQixZQUFNO0FBQ3BCO0FBQ0EsUUFBSUgsUUFBUSxDQUFDSSxPQUFiLEVBQXNCO0FBQ3BCSixNQUFBQSxRQUFRLENBQUNJLE9BQVQsQ0FBaUJDLEtBQWpCLENBQXVCQyxXQUF2QixDQUFtQyxhQUFuQyxFQUFrREMsTUFBTSxDQUFDWixJQUFELENBQU4sR0FBZSxJQUFqRTtBQUNBSyxNQUFBQSxRQUFRLENBQUNJLE9BQVQsQ0FBaUJDLEtBQWpCLENBQXVCQyxXQUF2QixDQUNFLHNCQURGLEVBRUVDLE1BQU0sQ0FBRWQsS0FBSyxHQUFHLENBQVQsR0FBYyxHQUFmLENBQU4sR0FBNEIsR0FGOUI7QUFJRDtBQUNGLEdBVEQsRUFTRyxDQUFDRSxJQUFELEVBQU9GLEtBQVAsQ0FUSDtBQVdBLFNBQ0U7QUFDRSxJQUFBLFNBQVMsRUFBRSw0QkFBVyxlQUFYLEVBQTRCRCxTQUE1QixDQURiO0FBRUUsSUFBQSxLQUFLLEVBQUVNLGlCQUFpQixHQUFHTCxLQUFILEdBQVdlLFNBRnJDO0FBR0UsSUFBQSxHQUFHLEVBQUVSO0FBSFAsS0FLRyxtQkFBSVMsS0FBSyxDQUFDZixXQUFELENBQUwsQ0FBbUJnQixJQUFuQixFQUFKLEVBQStCQyxHQUEvQixDQUFtQyxVQUFDQyxDQUFELEVBQU87QUFDekMsV0FDRSxvQkFBQyw2QkFBRDtBQUNFLE1BQUEsR0FBRyxpQkFBVUEsQ0FBVixDQURMO0FBRUUsTUFBQSxLQUFLLEVBQUVuQixLQUZUO0FBR0UsTUFBQSxLQUFLLEVBQUVtQixDQUhUO0FBSUUsTUFBQSxZQUFZLEVBQUVmO0FBSmhCLE1BREY7QUFRRCxHQVRBLENBTEgsQ0FERjtBQWtCRCxDQXhDRDs7ZUEwQ2VOLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuaW1wb3J0ICcuL1JhdGluZ0Rpc3BsYXkuY3NzJztcclxuaW1wb3J0IFJhdGluZ0Rpc3BsYXlTdGFyIGZyb20gJy4vUmF0aW5nRGlzcGxheVN0YXInO1xyXG5pbXBvcnQgZGVmYXVsdFN0YXJSZW5kZXJlciBmcm9tICcuL2RlZmF1bHRTdGFyUmVuZGVyZXInO1xyXG5cclxuaW1wb3J0IHtcclxuICBTdGFyUmVuZGVyZXJGdW5jdGlvblByb3BzLFxyXG4gIFN0YXJSZW5kZXJlckZ1bmN0aW9uLFxyXG4gIFN0YXJQcm9wcyxcclxuICBSYXRpbmdEaXNwbGF5UHJvcHMsXHJcbn0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5jb25zdCBSYXRpbmdEaXNwbGF5ID0gKHtcclxuICBjbGFzc05hbWUsXHJcbiAgdmFsdWUgPSAwLFxyXG4gIG51bWJlclN0YXJzID0gNSxcclxuICBzaXplID0gMzQsXHJcbiAgc3RhclJlbmRlcmVyOiBzdGFyUmVuZGVyZXJQcm9wLFxyXG4gIHNob3dSYXRpbmdPbkhvdmVyID0gZmFsc2UsXHJcbn06IFJhdGluZ0Rpc3BsYXlQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHN0YXJSZW5kZXJlciA9IHN0YXJSZW5kZXJlclByb3AgfHwgZGVmYXVsdFN0YXJSZW5kZXJlcjtcclxuICBjb25zdCBpbnB1dFJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIHNldCBDU1MgY3VzdG9tIHByb3BlcnR5IHZhbHVlcyBmb3IgdGhpcyBjb21wb25lbnRcclxuICAgIGlmIChpbnB1dFJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGlucHV0UmVmLmN1cnJlbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tc3Rhci1zaXplJywgU3RyaW5nKHNpemUpICsgJ3B4Jyk7XHJcbiAgICAgIGlucHV0UmVmLmN1cnJlbnQuc3R5bGUuc2V0UHJvcGVydHkoXHJcbiAgICAgICAgJy0tcGFydGlhbC1wZXJjZW50YWdlJyxcclxuICAgICAgICBTdHJpbmcoKHZhbHVlICUgMSkgKiAxMDApICsgJyUnXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSwgW3NpemUsIHZhbHVlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnUmF0aW5nRGlzcGxheScsIGNsYXNzTmFtZSl9XHJcbiAgICAgIHRpdGxlPXtzaG93UmF0aW5nT25Ib3ZlciA/IHZhbHVlIDogdW5kZWZpbmVkfVxyXG4gICAgICByZWY9e2lucHV0UmVmfVxyXG4gICAgPlxyXG4gICAgICB7Wy4uLkFycmF5KG51bWJlclN0YXJzKS5rZXlzKCldLm1hcCgoaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8UmF0aW5nRGlzcGxheVN0YXJcclxuICAgICAgICAgICAga2V5PXtgc3Rhci0ke2l9YH1cclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICBpbmRleD17aX1cclxuICAgICAgICAgICAgc3RhclJlbmRlcmVyPXtzdGFyUmVuZGVyZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJhdGluZ0Rpc3BsYXk7XHJcbiJdfQ==