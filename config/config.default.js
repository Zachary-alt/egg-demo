/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1614221741646_7753';

  // add your middleware config here
  config.middleware = [ 'robot', 'errorHandler' ];
  config.robot = {
    ua: [
      /Baiduspider/i,
    ],
  };
  config.swaggerdoc = {
    dirScanner: './app/controller',
    apiInfo: {
      title: '测试接⼝',
      description: '测试接⼝ swagger-ui for egg',
      version: '1.0.0',
    },
    schemes: [ 'http', 'https' ],
    consumes: [ 'application/json' ],
    produces: [ 'application/json' ],
    enableSecurity: false,
    // enableValidate: true,
    routerMap: true,
    enable: true,
  };
  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/egg_x',
    options: {
    // useMongoClient: true,
      autoReconnect: true,
      reconnectTries: Number.MAX_VALUE,
      bufferMaxEntries: 0,
    },
  };
  config.jwt = {
    secret: 'Great4-M',
    enable: true, // default is false
    match: /^\/api/, // optional
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };
  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };
  return {
    ...config,
    ...userConfig,
  };
};
