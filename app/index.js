'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var ReactGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  defineAppname: function () {
    this.appname = this.arguments[0] || this.appname;
    this.slug = this._.slugify(this.appname);
    this.libname = this._.capitalize(this._.camelize(this._.slugify(this._.humanize(this.appname))));
  },

  askFor: function () {
    console.log(this.appname);

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic React generator.'));
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/lib');
    this.mkdir('app/components');

    this.copy('.jshintrc', '.jshintrc');
    this.template('app/_index.jsx', 'app/' + this.slug + '.jsx');
    this.template('app/_index.html', 'app/index.html');
  },

  projectfiles: function () {
    this.copy('.bowerrc', '.bowerrc');
    this.copy('.editorconfig', '.editorconfig');
    this.copy('.gitignore', '.gitignore');
    this.copy('.jshintignore', '.jshintignore');
    this.copy('.jshintrc', '.jshintrc');

    this.template('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');
    this.template('_webpack.config.js', 'webpack.config.js');

    this.copy('bin/dev-server.js', 'bin/dev-server.js');
  }
});

module.exports = ReactGenerator;
