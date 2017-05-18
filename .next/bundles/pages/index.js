
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _homeLayout = __webpack_require__(564);

var _homeLayout2 = _interopRequireDefault(_homeLayout);

var _layout = __webpack_require__(565);

var _layout2 = _interopRequireDefault(_layout);

var _link = __webpack_require__(559);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function Index() {
  return _react2.default.createElement(_homeLayout2.default, null, _react2.default.createElement('div', null, _react2.default.createElement('link', { href: 'favicon.ico', rel: 'shortcut icon' }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800', rel: 'stylesheet' }), _react2.default.createElement('link', { href: 'static/lib/bootstrap/css/bootstrap.min.css', rel: 'stylesheet' }), _react2.default.createElement('link', { href: 'static/lib/font-awesome/css/font-awesome.min.css', rel: 'stylesheet' }), _react2.default.createElement('link', { href: 'static/lib/animate-css/animate.min.css', rel: 'stylesheet' }), _react2.default.createElement('link', { href: 'static/css/style.css', rel: 'stylesheet' }), _react2.default.createElement('section', { id: 'hero' }, _react2.default.createElement('div', { className: 'hero-container' }, _react2.default.createElement('div', { className: 'wow fadeIn' }, _react2.default.createElement('div', { className: 'hero-logo' }, _react2.default.createElement('img', { className: '', src: 'static/img/logo_byteme.svg', alt: 'ByteMe-Tech' })), _react2.default.createElement('h1', null, 'Welcome to ByteMe-Tech'), _react2.default.createElement('div', { className: 'actions' }, _react2.default.createElement('a', { href: '/about', className: 'btn-get-started' }, 'Get Started'), _react2.default.createElement('a', { href: '/services', className: 'btn-services' }, 'Our Services')))))));
};

exports.default = Index;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/timi/Documents/ByteMe-Tech/NextJs/site_ByteMe-tech/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/timi/Documents/ByteMe-Tech/NextJs/site_ByteMe-tech/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(559);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
	return _react2.default.createElement("div", null, _react2.default.createElement("link", { href: "static/img/favicon.ico", rel: "shortcut icon" }), _react2.default.createElement("link", { href: "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800", rel: "stylesheet" }), _react2.default.createElement("link", { href: "static/lib/bootstrap/css/bootstrap.min.css", rel: "stylesheet" }), _react2.default.createElement("link", { href: "static/lib/font-awesome/css/font-awesome.min.css", rel: "stylesheet" }), _react2.default.createElement("link", { href: "static/lib/animate-css/animate.min.css", rel: "stylesheet" }), _react2.default.createElement("link", { href: "static/css/style.css", rel: "stylesheet" }), _react2.default.createElement("header", { id: "header" }, _react2.default.createElement("div", { className: "container" }, _react2.default.createElement("div", { id: "logo", className: "pull-left" }, _react2.default.createElement("a", { href: "/" }, _react2.default.createElement("img", { src: "static/img/logo.png", alt: "", title: "" }))), _react2.default.createElement("nav", { id: "nav-menu-container" }, _react2.default.createElement("ul", { className: "nav-menu" }, _react2.default.createElement("li", null, _react2.default.createElement(_link2.default, { href: "/" }, _react2.default.createElement("a", null, "Home"))), _react2.default.createElement("li", null, _react2.default.createElement(_link2.default, { href: "/about" }, _react2.default.createElement("a", null, "About Us"))), _react2.default.createElement("li", null, _react2.default.createElement(_link2.default, { href: "/services" }, _react2.default.createElement("a", null, "Services"))), _react2.default.createElement("li", null, _react2.default.createElement(_link2.default, { href: "/technologies" }, _react2.default.createElement("a", null, "Technologies"))), _react2.default.createElement("li", null, _react2.default.createElement(_link2.default, { href: "/team" }, _react2.default.createElement("a", null, "Team"))), _react2.default.createElement("li", null, _react2.default.createElement(_link2.default, { href: "/contact" }, _react2.default.createElement("a", null, "Contact Us"))))))));
};

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/timi/Documents/ByteMe-Tech/NextJs/site_ByteMe-tech/components/header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/timi/Documents/ByteMe-Tech/NextJs/site_ByteMe-tech/components/header.js"); } } })();

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomeLayout = function HomeLayout(props) {
  return _react2.default.createElement("div", null, _react2.default.createElement("link", { href: "favicon.ico", rel: "shortcut icon" }), props.children);
};

exports.default = HomeLayout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/timi/Documents/ByteMe-Tech/NextJs/site_ByteMe-tech/components/homeLayout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/timi/Documents/ByteMe-Tech/NextJs/site_ByteMe-tech/components/homeLayout.js"); } } })();

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(563);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function Layout(props) {
  return _react2.default.createElement("div", null, _react2.default.createElement("link", { href: "static/img/favicon.ico", rel: "shortcut icon" }), _react2.default.createElement(_header2.default, null), props.children);
};

exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/timi/Documents/ByteMe-Tech/NextJs/site_ByteMe-tech/components/layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/timi/Documents/ByteMe-Tech/NextJs/site_ByteMe-tech/components/layout.js"); } } })();

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(560);


/***/ })

},[566]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz8wNmI1N2FiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyLmpzPzA2YjU3YWIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ob21lTGF5b3V0LmpzPzA2YjU3YWIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQuanM/MDZiNTdhYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFPOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRVAsSUFBTSxRQUFRO1NBQ1osZ0JBQUMsb0NBR0gsMkNBQ0ksOENBQU0sTUFBSyxlQUFjLEtBQ3pCLDREQUFNLE1BQUssNEdBQTJHLEtBQ3RILHlEQUFNLE1BQUssOENBQTZDLEtBQ3hELHlEQUFNLE1BQUssb0RBQW1ELEtBQzlELHlEQUFNLE1BQUssMENBQXlDLEtBQ3BELHlEQUFNLE1BQUssd0JBQXVCLEtBRWxDLDREQUFTLElBQ1AsaURBQUssV0FDSCwyREFBSyxXQUNILHVEQUFLLFdBQ0gsc0RBQUssV0FBVSxJQUFHLEtBQUksOEJBQTZCLEtBR3JELDZEQUNBLGtFQUFLLFdBQ0gsa0RBQUcsTUFBSyxVQUFTLFdBQVUscUJBQzNCLHFEQUFHLE1BQUssYUFBWSxXQUFVLGtCQUE5QjtBQVdaOztrQkFBZSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDUjs7Ozs7O0FBRVAsSUFBTSxTQUFTO1FBRVoscUNBQ0EsOENBQU0sTUFBSywwQkFBeUIsS0FDcEMsNERBQU0sTUFBSyw0R0FBMkcsS0FDdEgseURBQU0sTUFBSyw4Q0FBNkMsS0FDeEQseURBQU0sTUFBSyxvREFBbUQsS0FDOUQseURBQU0sTUFBSywwQ0FBeUMsS0FDcEQseURBQU0sTUFBSyx3QkFBdUIsS0FFL0IsMkRBQVEsSUFDUixtREFBSyxXQUVILHNEQUFLLElBQUcsUUFBTyxXQUNiLG9EQUFHLE1BQ0YsOENBQUssS0FBSSx1QkFBc0IsS0FBSSxJQUFHLE9BSXpDLGdEQUFLLElBQ0gsOERBQUksV0FDTixrREFDQyxzQkFBQyxnQ0FBSyxNQUNBLGdEQUlKLCtDQUNDLHNCQUFDLGdDQUFLLE1BQ0gscURBSUosbURBQ0Msc0JBQUMsZ0NBQUssTUFDSCx3REFJSixtREFDQyxzQkFBQyxnQ0FBSyxNQUNILDREQUlKLHVEQUNDLHNCQUFDLGdDQUFLLE1BQ0gsb0RBSUosK0NBQ0Msc0JBQUMsZ0NBQUssTUFDSjtBQVVkOztrQkFBZSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVmLElBQU0sYUFBYSxvQkFBQyxPQUFEO1NBQ2pCLHFDQUNDLDhDQUFNLE1BQUssZUFBYyxLQUN2QiwwQkFBTTtBQUlYOztrQkFBZSxXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JSOzs7Ozs7QUFFUCxJQUFNLFNBQVMsZ0JBQUMsT0FBRDtTQUNiLHFDQUNDLDhDQUFNLE1BQUssMEJBQXlCLEtBQ25DLG9DQUFDLGdDQUNBLGFBQU07QUFJWDs7a0JBQWUsTyIsImZpbGUiOiJidW5kbGVzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhvbWVMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9ob21lTGF5b3V0LmpzJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC5qcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgSW5kZXggPSAoKSA9PiAoXG4gIDxIb21lTGF5b3V0PlxuXG5cbjxkaXY+XG4gICAgPGxpbmsgaHJlZj1cImZhdmljb24uaWNvXCIgcmVsPVwic2hvcnRjdXQgaWNvblwiLz5cbiAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FuczozMDAsMzAwaSw0MDAsNDAwaSw3MDAsNzAwaXxSYWxld2F5OjMwMCw0MDAsNTAwLDcwMCw4MDBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPiBcbiAgICA8bGluayBocmVmPVwic3RhdGljL2xpYi9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiLz4gXG4gICAgPGxpbmsgaHJlZj1cInN0YXRpYy9saWIvZm9udC1hd2Vzb21lL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gICAgPGxpbmsgaHJlZj1cInN0YXRpYy9saWIvYW5pbWF0ZS1jc3MvYW5pbWF0ZS5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgICA8bGluayBocmVmPVwic3RhdGljL2Nzcy9zdHlsZS5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgIFxuICAgIDxzZWN0aW9uIGlkPVwiaGVyb1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvdyBmYWRlSW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tbG9nb1wiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJcIiBzcmM9XCJzdGF0aWMvaW1nL2xvZ29fYnl0ZW1lLnN2Z1wiIGFsdD1cIkJ5dGVNZS1UZWNoXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICA8aDE+V2VsY29tZSB0byBCeXRlTWUtVGVjaDwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiL2Fib3V0XCIgY2xhc3NOYW1lPVwiYnRuLWdldC1zdGFydGVkXCI+R2V0IFN0YXJ0ZWQ8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiL3NlcnZpY2VzXCIgY2xhc3NOYW1lPVwiYnRuLXNlcnZpY2VzXCI+T3VyIFNlcnZpY2VzPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuXG4gIDwvZGl2PlxuICAgPC9Ib21lTGF5b3V0PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuIFxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxuICBcbiAgXHQ8ZGl2PlxuXHQgIDxsaW5rIGhyZWY9XCJzdGF0aWMvaW1nL2Zhdmljb24uaWNvXCIgcmVsPVwic2hvcnRjdXQgaWNvblwiLz5cdCAgXG5cdCAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6MzAwLDMwMGksNDAwLDQwMGksNzAwLDcwMGl8UmFsZXdheTozMDAsNDAwLDUwMCw3MDAsODAwXCIgcmVsPVwic3R5bGVzaGVldFwiLz4gXG5cdCAgPGxpbmsgaHJlZj1cInN0YXRpYy9saWIvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIi8+IFxuXHQgIDxsaW5rIGhyZWY9XCJzdGF0aWMvbGliL2ZvbnQtYXdlc29tZS9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuXHQgIDxsaW5rIGhyZWY9XCJzdGF0aWMvbGliL2FuaW1hdGUtY3NzL2FuaW1hdGUubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG5cdCAgPGxpbmsgaHJlZj1cInN0YXRpYy9jc3Mvc3R5bGUuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cblxuXHQgICAgIDxoZWFkZXIgaWQ9XCJoZWFkZXJcIj5cblx0ICAgIFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0ICAgIFxuXHRcdCAgICAgIDxkaXYgaWQ9XCJsb2dvXCIgY2xhc3NOYW1lPVwicHVsbC1sZWZ0XCI+XG5cdFx0ICAgICAgICA8YSBocmVmPVwiL1wiPlxuXHRcdCAgICAgICAgXHQ8aW1nIHNyYz1cInN0YXRpYy9pbWcvbG9nby5wbmdcIiBhbHQ9XCJcIiB0aXRsZT1cIlwiIC8+XG5cdFx0ICAgICAgICA8L2E+XG5cdFx0ICAgICAgPC9kaXY+XG5cdFx0ICAgICAgICBcblx0XHQgICAgICA8bmF2IGlkPVwibmF2LW1lbnUtY29udGFpbmVyXCI+XG5cdFx0ICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2LW1lbnVcIj5cblx0XHQgICAgXHRcdDxsaT5cblx0XHRcdFx0ICAgIFx0PExpbmsgaHJlZj1cIi9cIj5cblx0XHRcdFx0ICAgICAgICAgIFx0PGE+SG9tZTwvYT5cblx0XHRcdFx0ICAgICAgICA8L0xpbms+XG5cdFx0XHQgICAgICAgIDwvbGk+XG5cblx0XHRcdCAgICAgICAgPGxpPlxuXHRcdFx0XHQgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cblx0XHRcdFx0ICAgICAgICAgIFx0PGE+QWJvdXQgVXM8L2E+XG5cdFx0XHRcdCAgICAgICAgPC9MaW5rPlxuXHRcdFx0ICAgICAgICA8L2xpPlxuXG5cdFx0XHQgICAgICAgIDxsaT5cblx0XHRcdFx0ICAgICAgICA8TGluayBocmVmPVwiL3NlcnZpY2VzXCI+XG5cdFx0XHRcdCAgICAgICAgICBcdDxhPlNlcnZpY2VzPC9hPlxuXHRcdFx0XHQgICAgICAgIDwvTGluaz5cblx0XHRcdCAgICAgICAgPC9saT5cblxuXHRcdFx0ICAgICAgICA8bGk+XG5cdFx0XHQgICAgICAgIFx0PExpbmsgaHJlZj1cIi90ZWNobm9sb2dpZXNcIj5cblx0XHRcdCAgICAgICAgICBcdFx0PGE+VGVjaG5vbG9naWVzPC9hPlxuXHRcdFx0ICAgICAgICBcdDwvTGluaz5cblx0XHRcdCAgICAgICAgPC9saT5cblxuXHRcdFx0ICAgICAgICA8bGk+XG5cdFx0XHRcdCAgICAgICAgPExpbmsgaHJlZj1cIi90ZWFtXCI+XG5cdFx0XHRcdCAgICAgICAgICBcdDxhPlRlYW08L2E+XG5cdFx0XHRcdCAgICAgICAgPC9MaW5rPlxuXHRcdFx0XHQgICAgPC9saT5cblxuXHRcdFx0ICAgICAgICA8bGk+XG5cdFx0XHQgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cblx0XHQgICAgICAgICAgXHRcdDxhPkNvbnRhY3QgVXM8L2E+XG5cdFx0ICAgICAgICAgIFx0PC9MaW5rPlxuXHRcdCAgICAgICAgICBcdDwvbGk+XG5cdFx0ICAgICAgICA8L3VsPlxuXHRcdCAgICAgIDwvbmF2PlxuXHRcdCAgICA8L2Rpdj5cblx0ICBcdDwvaGVhZGVyPiAgIFxuXHQ8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2hlYWRlci5qcyIsIlxuY29uc3QgSG9tZUxheW91dCA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICBcdDxsaW5rIGhyZWY9XCJmYXZpY29uLmljb1wiIHJlbD1cInNob3J0Y3V0IGljb25cIi8+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSG9tZUxheW91dFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9ob21lTGF5b3V0LmpzIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlci5qcydcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gIFx0PGxpbmsgaHJlZj1cInN0YXRpYy9pbWcvZmF2aWNvbi5pY29cIiByZWw9XCJzaG9ydGN1dCBpY29uXCIvPlxuICAgIDxIZWFkZXIgLz5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        