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

var WebHookHandler = function (_BaseHandler) {
    (0, _inherits3.default)(WebHookHandler, _BaseHandler);

    function WebHookHandler() {
        (0, _classCallCheck3.default)(this, WebHookHandler);
        return (0, _possibleConstructorReturn3.default)(this, (WebHookHandler.__proto__ || (0, _getPrototypeOf2.default)(WebHookHandler)).apply(this, arguments));
    }

    (0, _createClass3.default)(WebHookHandler, [{
        key: 'index',
        value: function index(req, res) {
            if (req.query['hub.mode'] === 'subscribe' && req.query['hub.verify_token'] === _configuration2.default.fb.myVerification) {
                res.status(200).send(req.query['hub.challenge']);
            } else {
                res.sendStatus(403);
            }
        }
    }]);
    return WebHookHandler;
}(_base2.default);

exports.default = new WebHookHandler();