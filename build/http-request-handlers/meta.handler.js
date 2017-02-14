'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require('./base.handler');

var _base2 = _interopRequireDefault(_base);

var _configuration = require('../configuration');

var _configuration2 = _interopRequireDefault(_configuration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MetaHandler = function (_BaseHandler) {
	(0, _inherits3.default)(MetaHandler, _BaseHandler);

	function MetaHandler() {
		(0, _classCallCheck3.default)(this, MetaHandler);
		return (0, _possibleConstructorReturn3.default)(this, (MetaHandler.__proto__ || (0, _getPrototypeOf2.default)(MetaHandler)).apply(this, arguments));
	}

	(0, _createClass3.default)(MetaHandler, [{
		key: 'index',
		value: function index(req, res) {
			res.json({
				description: 'This skeletal applicaiton should serve as a template for developing fb messenger application services',
				version: _configuration2.default.apiVersion,
				health: 'ok'
			});
		}
	}]);
	return MetaHandler;
}(_base2.default);

exports.default = new MetaHandler();