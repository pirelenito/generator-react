#!/usr/bin/env node

var path = require('path'),
    webpack = require('webpack'),
    webpackMiddleware = require('webpack-dev-middleware'),
    connect = require('connect'),
    webpackConfig = require('../webpack.config.js');


var app = connect();


function sassMiddleware () {
  var sass = require('node-sass'),
      sassDest = path.join(__dirname, '../.compiled_sass'),
      directory = path.join(__dirname, '../app');

  var app = connect();

  app.use(sass.middleware({
    src: directory,
    includePaths: directory,
    dest: sassDest,
    force: true
  }));

  app.use(connect.static(sassDest));
  app.use(connect.static(directory));

  return app;
}


app.use(sassMiddleware());
app.use(webpackMiddleware(webpack(webpackConfig)));


console.log('Starting development server at http://localhost:8000');
app.listen(8000);
