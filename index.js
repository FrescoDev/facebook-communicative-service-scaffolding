process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV != 'development') {
    require('./build/server.js');
} else {
    require('babel-register');
    require('./app/server');
}