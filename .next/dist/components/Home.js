"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
	return _react2.default.createElement("div", null, _react2.default.createElement("link", { href: "favicon.ico", rel: "shortcut icon" }), _react2.default.createElement("link", { href: "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800", rel: "stylesheet" }), _react2.default.createElement("link", { href: "static/lib/bootstrap/css/bootstrap.min.css", rel: "stylesheet" }), _react2.default.createElement("link", { href: "static/lib/font-awesome/css/font-awesome.min.css", rel: "stylesheet" }), _react2.default.createElement("link", { href: "static/lib/animate-css/animate.min.css", rel: "stylesheet" }), _react2.default.createElement("link", { href: "static/css/style.css", rel: "stylesheet" }), _react2.default.createElement("section", { id: "hero" }, _react2.default.createElement("div", { className: "hero-container" }, _react2.default.createElement("div", { className: "wow fadeIn" }, _react2.default.createElement("div", { className: "hero-logo" }, _react2.default.createElement("img", { className: "", src: "static/img/logo_byteme.svg", alt: "ByteMe-Tech" })), _react2.default.createElement("h1", null, "Welcome to ByteMe-Tech"), _react2.default.createElement("div", { className: "actions" }, _react2.default.createElement("a", { href: "/about", className: "btn-get-started" }, "Get Started"), _react2.default.createElement("a", { href: "/services", className: "btn-services" }, "Our Services"))))));
};

exports.default = Home;