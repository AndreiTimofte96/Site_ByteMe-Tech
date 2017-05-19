'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _homeLayout = require('../components/homeLayout.js');

var _homeLayout2 = _interopRequireDefault(_homeLayout);

var _layout = require('../components/layout.js');

var _layout2 = _interopRequireDefault(_layout);

var _Home = require('../components/Home.js');

var _Home2 = _interopRequireDefault(_Home);

var _About = require('../components/About.js');

var _About2 = _interopRequireDefault(_About);

var _Services = require('../components/Services.js');

var _Services2 = _interopRequireDefault(_Services);

var _Technologies = require('../components/Technologies.js');

var _Technologies2 = _interopRequireDefault(_Technologies);

var _Team = require('../components/Team.js');

var _Team2 = _interopRequireDefault(_Team);

var _Contact = require('../components/Contact.js');

var _Contact2 = _interopRequireDefault(_Contact);

var _footer = require('../components/footer.js');

var _footer2 = _interopRequireDefault(_footer);

var _header = require('../components/header.js');

var _header2 = _interopRequireDefault(_header);

var _stickyHeader = require('../components/stickyHeader.js');

var _stickyHeader2 = _interopRequireDefault(_stickyHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function Index() {
  return _react2.default.createElement(_homeLayout2.default, null, _react2.default.createElement('title', null, 'ByteMe-Tech'), _react2.default.createElement(_Home2.default, null), _react2.default.createElement(_stickyHeader2.default, null), _react2.default.createElement(_About2.default, null), _react2.default.createElement(_Services2.default, null), _react2.default.createElement(_Technologies2.default, null), _react2.default.createElement(_Team2.default, null), _react2.default.createElement(_Contact2.default, null), _react2.default.createElement(_footer2.default, null));
};
exports.default = Index;