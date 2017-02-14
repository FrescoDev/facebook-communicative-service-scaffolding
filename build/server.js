'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _errorhandler = require('errorhandler');

var _errorhandler2 = _interopRequireDefault(_errorhandler);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _methodOverride = require('method-override');

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _configuration = require('./configuration');

var _configuration2 = _interopRequireDefault(_configuration);

var _facebookMessengerBot = require('facebook-messenger-bot');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('babel-polyfill');

var bot = new _facebookMessengerBot.Bot(_configuration2.default.fb.myPageToken, _configuration2.default.fb.myVerification);

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

var app = (0, _express2.default)();

// Use fb bot framework middleware
app.use('/facebook', bot.router());

// Adds some security best practices
app.use((0, _helmet2.default)());
app.use((0, _cors2.default)());

// Logger
if (!_configuration2.default.envs.test) {
    app.use((0, _morgan2.default)('dev'));
}

// Properly Decode JSON
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

// Add all HTTP methods
app.use((0, _methodOverride2.default)());

// Mount API routes
app.use('/', _routes2.default);

// Only use error handler in development
if (_configuration2.default.envs.development) {
    app.use((0, _errorhandler2.default)());
}

app.listen(_configuration2.default.port, function () {
    // eslint-disable-next-line no-console
    console.log('\n    === App Server ===\n\n    Connected on:\n    \n    Port: ' + _configuration2.default.port + '\n    Env: ' + app.get('env') + '\n    \n  ');
});

exports.default = app;