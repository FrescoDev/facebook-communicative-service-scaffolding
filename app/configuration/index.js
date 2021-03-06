import path from 'path';
import {merge} from 'lodash';

// Default configuations applied to all environments
const defaultConfig = {
  env: process.env.NODE_ENV,
  get envs() {
    return {
      test: process.env.NODE_ENV === 'test',
      development: process.env.NODE_ENV === 'development',
      production: process.env.NODE_ENV === 'production'
    }
  },
  apiVersion: require('../../package.json').apiVersion,
  root: path.normalize(__dirname + '/../../..'),
  port: process.env.PORT || 4567,
  ip: process.env.IP || '0.0.0.0',
  fb : {
    myPageToken : 'EAAC8JFyujyoBAJZAKzMoJ4ng1Y4yALUDtgPQ9YHNhvwM1ZBZB6QfswonRlN3O2cwCkNZAgZBHJKQ3RRA8mZCKAhi835kgW7YXeuvJAeahbM9VwQGXrp3DR0rDegP5JKJZBqjTa1wlt16LWTKNxvIlsmDDY2ZBxLBlVSLHxSUtd5AAjQId2y4vOau',
    myVerification : 'demosecret'
  },
  auth0: {
    secret: 'secret',
    client: 'client',
    domain: 'https://likelyloans.eu.auth0.com/'
  },
  /**
   * Security configuation options regarding sessions, authentication and hashing
   */
  security: {
    sessionSecret: process.env.SESSION_SECRET || 'i-am-the-secret-key',
    sessionExpiration: process.env.SESSION_EXPIRATION || 60 * 60 * 24 * 7, // 1 week
    saltRounds: process.env.SALT_ROUNDS || 12
  }
};

// Environment specific overrides
const environmentConfigs = {
  development: {
    security: {
      saltRounds: 4
    }
  },
  test: {
    port: 5678,
    security: {
      saltRounds: 4
    }
  },
  production: {
  }
};

// Recursively merge configurations
export default merge(defaultConfig, environmentConfigs[process.env.NODE_ENV] || {});
