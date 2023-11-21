"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const InvoiceForm = () => {
  const [count, setCount] = _react.default.useState(101);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, "Invoice Form1 ", count, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => setCount(count + 1)
  }, "Click me"));
};
var _default = exports.default = InvoiceForm;