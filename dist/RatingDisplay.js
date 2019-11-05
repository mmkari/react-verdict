"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  //   position: relative;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  align-self: center;\n  color: lightgray;\n  z-index: 10;\n  font-size: ", "px;\n\n  .RatingDisplayStar-partial {\n    position: absolute;\n    width: ", "%;\n    // width: 50%;\n    z-index: 11;\n    overflow: hidden;\n    color: orange;\n  }\n\n  //   &.colored {\n  //     color: yellow;\n  //   }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var defaultStarRenderer = function defaultStarRenderer() {
  return String.fromCharCode(9733);
};

var RatingDisplayStar = function RatingDisplayStar(_ref) {
  var className = _ref.className,
      rating = _ref.rating,
      index = _ref.index,
      starRenderer = _ref.starRenderer;
  var colored = rating > index;
  return React.createElement("div", {
    className: (0, _classnames["default"])('RatingDisplayStar', className, {
      colored: colored
    })
  }, colored && React.createElement("span", {
    className: "RatingDisplayStar-partial"
  }, starRenderer({
    rating: rating,
    index: index,
    className: 'colored',
    active: true
  })), starRenderer({
    rating: rating,
    index: index,
    className: 'uncolored'
  }));
};

var StyledRatingDisplayStar = (0, _styledComponents["default"])(RatingDisplayStar)(_templateObject(), function (_ref2) {
  var fontSize = _ref2.fontSize;
  return fontSize;
}, function (_ref3) {
  var rating = _ref3.rating,
      index = _ref3.index;
  return Math.min(rating - index, 1) * 100;
});

var RatingDisplay = function RatingDisplay(_ref4) {
  var className = _ref4.className,
      rating = _ref4.rating,
      numberStarsProp = _ref4.numberStars,
      fontSizeProp = _ref4.fontSize,
      starRendererProp = _ref4.starRenderer,
      _ref4$showRatingOnHov = _ref4.showRatingOnHover,
      showRatingOnHover = _ref4$showRatingOnHov === void 0 ? false : _ref4$showRatingOnHov;
  //
  var numberStars = numberStarsProp || 5;
  var fontSize = fontSizeProp || 34;
  var starRenderer = starRendererProp || defaultStarRenderer;
  return React.createElement("div", {
    className: (0, _classnames["default"])('RatingDisplay', className),
    title: showRatingOnHover ? rating : undefined
  }, _toConsumableArray(Array(numberStars).keys()).map(function (i) {
    return React.createElement(StyledRatingDisplayStar, {
      key: "star-".concat(i),
      rating: rating,
      index: i,
      fontSize: fontSize,
      starRenderer: starRenderer
    });
  }));
};

var StyledRatingDisplay = (0, _styledComponents["default"])(RatingDisplay)(_templateObject2());
var _default = StyledRatingDisplay;
exports["default"] = _default;