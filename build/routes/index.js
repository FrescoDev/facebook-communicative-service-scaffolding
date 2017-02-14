'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _bluebird = require('bluebird');

var _meta = require('../http-request-handlers/meta.handler');

var _meta2 = _interopRequireDefault(_meta);

var _express = require('express');

var _configuration = require('../configuration');

var _configuration2 = _interopRequireDefault(_configuration);

var _facebookMessengerBot = require('facebook-messenger-bot');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('babel-polyfill');


var bot = new _facebookMessengerBot.Bot(_configuration2.default.fb.myPageToken, _configuration2.default.fb.myVerification);

var routes = new _express.Router();
var version = _configuration2.default.apiVersion;

bot.on('message', function () {
    var _ref = (0, _bluebird.coroutine)(_regenerator2.default.mark(function _callee(message) {
        var sender, out;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        sender = message.sender;
                        _context.next = 3;
                        return sender.fetch('first_name');

                    case 3:
                        out = new _facebookMessengerBot.Elements();

                        out.add({ text: 'hey ' + sender.first_name + ', how are you!' });

                        _context.next = 7;
                        return bot.send(sender.id, out);

                    case 7:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}());

// Use fb bot framework middleware
routes.use(version + '/webhook', bot.router());
routes.get(version + '/meta', _meta2.default.index);

exports.default = routes;