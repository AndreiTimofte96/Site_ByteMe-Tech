"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _header = require("./header.js");

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function Layout(props) {
  return _react2.default.createElement("div", null, _react2.default.createElement("link", { href: "static/img/favicon.ico", rel: "shortcut icon" }), _react2.default.createElement(_header2.default, null), props.children);
};

exports.default = Layout;