"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
	return _react2.default.createElement("div", null, _react2.default.createElement("link", { href: "static/img/favicon.ico", rel: "shortcut icon" }), _react2.default.createElement("link", { href: "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800", rel: "stylesheet" }), _react2.default.createElement("link", { href: "static/lib/bootstrap/css/bootstrap.min.css", rel: "stylesheet" }), _react2.default.createElement("link", { href: "static/lib/font-awesome/css/font-awesome.min.css", rel: "stylesheet" }), _react2.default.createElement("link", { href: "static/lib/animate-css/animate.min.css", rel: "stylesheet" }), _react2.default.createElement("link", { href: "static/css/style.css", rel: "stylesheet" }), _react2.default.createElement("footer", { id: "footer" }, _react2.default.createElement("div", { className: "container" }, _react2.default.createElement("div", { classNameName: "row" }, _react2.default.createElement("div", { className: "col-md-12" }, _react2.default.createElement("div", { className: "copyright" }, "\xA9 Copyright ", _react2.default.createElement("strong", null, "Imperial Theme"), ". All Rights Reserved"), _react2.default.createElement("div", { className: "credits" }, "Bootstrap Themes by ", _react2.default.createElement("a", { href: "https://bootstrapmade.com/" }, "BootstrapMade "), _react2.default.createElement("a", { href: "http://www.freepik.com" }, "Designed by D3images / Freepik")))))));
};
exports.default = Footer;