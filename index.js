process.env.NODE_ENV = process.env.NODE_ENV || 'development';
require('babel-register');

if (process.env.NODE_ENV != 'development') {
    require('./build/server.js');
} else {
    require('./app/server');
}