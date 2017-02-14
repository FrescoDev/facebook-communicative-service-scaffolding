'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseHandler = function () {
    function BaseHandler() {
        _classCallCheck(this, BaseHandler);
    }

    _createClass(BaseHandler, [{
        key: 'filterParams',
        value: function filterParams(params, whitelist) {
            var filtered = {};
            for (var key in params) {
                if (whitelist.indexOf(key) > -1) {
                    filtered[key] = params[key];
                }
            }
            return filtered;
        }
    }, {
        key: 'formatApiError',
        value: function formatApiError(err) {
            if (!err) {
                // eslint-disable-next-line no-console
                return console.error('Provide an error');
            }

            var formatted = {
                message: err.message
            };

            if (err.errors) {
                formatted.errors = {};
                var errors = err.errors;
                for (var type in errors) {
                    formatted.errors[type] = errors[type].message;
                }
            }

            return formatted;
        }
    }]);

    return BaseHandler;
}();

exports.default = BaseHandler;