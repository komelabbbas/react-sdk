"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
const InvoiceForm = () => {
  const [count, setCount] = (0, _react.useState)(100);
  console.log("InvoiceForm");
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, "Invoice Form ", count, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count + 1)
  }, "Click me"));
};
var _default = exports.default = InvoiceForm;