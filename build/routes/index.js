'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _meta = require('../http-request-handlers/meta.handler');

var _meta2 = _interopRequireDefault(_meta);

var _webhook = require('../http-request-handlers/webhook.handler');

var _webhook2 = _interopRequireDefault(_webhook);

var _express = require('express');

var _configuration = require('../configuration');

var _configuration2 = _interopRequireDefault(_configuration);

var _facebookMessengerBot = require('facebook-messenger-bot');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('babel-polyfill');

var bot = new _facebookMessengerBot.Bot(_configuration2.default.fb.myPageToken, _configuration2.default.fb.myVerification);

var routes = new _express.Router();
var version = _configuration2.default.apiVersion;

bot.on('message', function _callee(message) {
    var sender, out;
    return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    sender = message.sender;
                    _context.next = 3;
                    return regeneratorRuntime.awrap(sender.fetch('first_name'));

                case 3:
                    out = new _facebookMessengerBot.Elements();

                    out.add({ text: 'hey ' + sender.first_name + ', how are you!' });

                    _context.next = 7;
                    return regeneratorRuntime.awrap(bot.send(sender.id, out));

                case 7:
                case 'end':
                    return _context.stop();
            }
        }
    }, null, undefined);
});

// Use fb bot framework middleware
routes.use(version + '/webhook', bot.router());
routes.get(version + '/meta', _meta2.default.index);
//routes.get(`${version}/webhook`, WebHookhandler.index);


exports.default = routes;