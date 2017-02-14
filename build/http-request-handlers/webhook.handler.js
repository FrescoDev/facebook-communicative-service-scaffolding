'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./base.handler');

var _base2 = _interopRequireDefault(_base);

var _configuration = require('../configuration');

var _configuration2 = _interopRequireDefault(_configuration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WebHookHandler = function (_BaseHandler) {
    _inherits(WebHookHandler, _BaseHandler);

    function WebHookHandler() {
        _classCallCheck(this, WebHookHandler);

        return _possibleConstructorReturn(this, (WebHookHandler.__proto__ || Object.getPrototypeOf(WebHookHandler)).apply(this, arguments));
    }

    _createClass(WebHookHandler, [{
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