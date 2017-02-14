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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = new _express.Router();
var version = _configuration2.default.apiVersion;

routes.get(version + '/meta', _meta2.default.index);
routes.get(version + '/webhook', _webhook2.default.index);

exports.default = routes;